# Fetching processing dcm files like a boss

import numpy as np
import os
import matplotlib as mpl
mpl.use('TkAgg')
import matplotlib.pyplot as plt
import pydicom as dicom
from pydicom.data import get_testdata_files
import time

def timing(f):
    def wrap(*args):
        time1 = time.time()
        ret = f(*args)
        time2 = time.time()
        print('{:s} function took {:.3f} s'.format(f.__name__, (time2-time1)))
        return ret
    return wrap

def getDicomArray(refDs, lstFiles):
    ConstPixelDims = (len(lstFiles), int(refDs.Rows), int(refDs.Columns))
    ConstPixelSpacing = (float(refDs.PixelSpacing[0]), float(refDs.PixelSpacing[1]), float(refDs.SliceThickness))
    PixelDict = {}
    PixelDict['ids'] = []
    ArrayDicom = np.zeros(ConstPixelDims, dtype=refDs.pixel_array.dtype)
    # loop through all the DICOM files
    for filenameDCM in lstFiles:
        # read the file
        ds = dicom.read_file(filenameDCM)
        key = str(ds.pixel_array.shape)
        if len(PixelDict.keys()) == 1:
            PixelDict[key] = np.asarray([ds.pixel_array])
            PixelDict['ids'].append(ds.SOPInstanceUID)
        elif len(PixelDict.keys()) > 1 and key in PixelDict:
            PixelDict[key] = np.vstack((PixelDict[key], [ds.pixel_array]))
            PixelDict['ids'].append(ds.SOPInstanceUID)
        else:
            print('Skipping', filenameDCM)
    return PixelDict

def extractFeatures(PathDicom):
    print("Extracting folder:",PathDicom)
    lstCTFilesDCM = []
    lstMRFilesDCM = []
    lstOtherFilesDCM = []
    metadata = {}
    metaExtracted = False
    for dirName, subdirList, fileList in os.walk(PathDicom):
        for filename in fileList:
            if ".dcm" in filename.lower() and "ct" in filename.lower()[:2]:  # check whether the file's CT
                lstCTFilesDCM.append(os.path.join(dirName,filename))
                if not metaExtracted:
                    metadata = extractMetaData(os.path.join(dirName, filename))
                    metaExtracted = True
            elif ".dcm" in filename.lower() and "mr" in filename.lower()[:2]:  # check whether the file's MR
                lstMRFilesDCM.append(os.path.join(dirName, filename))
                if not metaExtracted:
                    metadata = extractMetaData(os.path.join(dirName, filename))
                    metaExtracted = True
            else:
                lstOtherFilesDCM.append(os.path.join(dirName, filename))
    
    if len(lstCTFilesDCM) > 0:
        refDsCT = dicom.read_file(lstCTFilesDCM[0])
        ArrayCT = getDicomArray(refDsCT, lstCTFilesDCM)
    else:
        ArrayCT = {}
    if len(lstMRFilesDCM) > 0:
        refDsMR = dicom.read_file(lstMRFilesDCM[0])
        ArrayMR = getDicomArray(refDsMR, lstMRFilesDCM)
    else:
        ArrayMR = {}
    return ArrayCT, ArrayMR, metadata

def extractFeaturesFromFiles(PathDicom):
    print("Processing uploads")
    lstCTFilesDCM = []
    lstMRFilesDCM = []
    lstOtherFilesDCM = []
    metadata = {}
    metaExtracted = False
    for it in PathDicom:
        filename = PathDicom[it].filename
        filename = filename[filename.index("/")+1:]
        if metaExtracted:
            break
        if ".dcm" in filename.lower() and "ct" in filename.lower()[:2]:  # check whether the file's CT
            lstCTFilesDCM.append(PathDicom[it])
            if not metaExtracted:
                metadata = extractMetaData(PathDicom[it])
                metaExtracted = True
        elif ".dcm" in filename.lower() and "mr" in filename.lower()[:2]:  # check whether the file's MR
            lstMRFilesDCM.append(PathDicom[it])
            if not metaExtracted:
                metadata = extractMetaData(PathDicom[it])
                metaExtracted = True
        else:
            lstOtherFilesDCM.append(PathDicom[it])
    
    ArrayCT = {}
    ArrayMR = {}
    # if len(lstCTFilesDCM) > 0:
    #     refDsCT = dicom.read_file(lstCTFilesDCM[0])
    #     ArrayCT = getDicomArray(refDsCT, lstCTFilesDCM)
    # if len(lstMRFilesDCM) > 0:
    #     refDsMR = dicom.read_file(lstMRFilesDCM[0])
    #     ArrayMR = getDicomArray(refDsMR, lstMRFilesDCM)

    temp = {}
    temp['ct'] = ArrayCT
    temp['mr'] = ArrayMR
    temp['meta'] = metadata
    print("returning", temp['meta'])
    return temp

def extractMetaData(filenameDCM):
    extract = ['PatientBirthDate', 'PatientID', 'PatientName', 'ImageComments', 'PatientSex', 'StudyDate', 'InstitutionName', 'ReferringPhysicianName', 'SOPInstanceUID']
    ds = dicom.read_file(filenameDCM)
    temp = {}
    for item in extract:
        attr = getattr(ds, item, 'NA')
        temp[item] = str(attr)
    return temp

@timing
def extractAndSave(dataset='dataset/'):
    foldernames = os.listdir(dataset)
    foldernames.remove('.DS_Store')
    foldernames = ['339663', '345923', '346231', '351423', '353891']
    x = list(map(lambda a: distributor(a), foldernames))
    print("DONE")

def distributor(user, dataset='dataset/'):    
    path = "./" + dataset + user + "/"
    temp = {}
    if (not os.path.isfile('npy/'+user+'.npy')):
        ret = extractFeatures(path)
        temp['ct'] = ret[0]
        temp['mr'] = ret[1]
        temp['meta'] = ret[2]
        np.save('npy/'+str(user)+'.npy', temp)
    return temp

from multiprocessing.dummy import Pool as ThreadPool
import os
import sys

@timing
def extractAndSaveDistributed(dataset='dataset/'):
    foldernames = os.listdir(dataset)
    foldernames.remove('.DS_Store')
    foldernames = ['339663', '345923', '346231', '351423', '353891']
    pool = ThreadPool(os.cpu_count())
    x = pool.map(distributor, foldernames)
    print("DONE")
    pool.close()
    pool.join()
    

def main():
    distributed = False
    if len(sys.argv)>1 and sys.argv[1]=='multi':
        distributed = True
    print("Machine CPUs:", os.cpu_count(), "Multiprocessing:", distributed)
    if os.path.isfile('users.npy'):
        users = np.load('users.npy')
    else:
        dataset = 'dataset/'
        if not distributed: 
            extractAndSave(dataset)
        else:
            extractAndSaveDistributed(dataset)

if __name__ == "__main__":
    main()


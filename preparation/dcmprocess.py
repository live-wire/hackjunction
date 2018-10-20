# Fetching processing dcm files like a boss

import numpy as np
import os
import matplotlib as mpl
mpl.use('TkAgg')
import matplotlib.pyplot as plt
import pydicom as dicom
from pydicom.data import get_testdata_files


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


def extractMetaData(filenameDCM):
    extract = ['PatientBirthDate', 'PatientID', 'PatientName', 'ImageComments', 'PatientSex', 'StudyDate', 'InstitutionName', 'ReferringPhysicianName', 'SOPInstanceUID']
    ds = dicom.read_file(filenameDCM)
    temp = {}
    for item in extract:
        temp[item] = getattr(ds, item, 'NA')
    return temp

def extractAndSave(dataset='dataset/'):
	foldernames = os.listdir(dataset)
	foldernames.remove('.DS_Store')
	for i,user in enumerate(foldernames):
	    path = "./" + dataset + user + "/"
	    if (not os.path.isfile('npy/'+user+'.npy')):
		    temp = {}
		    ret = extractFeatures(path)
		    temp['ct'] = ret[0]
		    temp['mr'] = ret[1]
		    temp['meta'] = ret[2]
		    np.save('npy/'+str(user)+'.npy', temp)

def main():
	if os.path.isfile('users.npy'):
		users = np.load('users.npy')
	else:
		dataset = 'dataset/'
		extractAndSave(dataset)

if __name__ == "__main__":
	main()


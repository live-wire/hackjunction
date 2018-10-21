headDirectory = "/Users/f002nb9/Documents/f002nb9/hackBudapest/dataSetFolderStuff/Dataset";
import os
import pydicom
import numpy as np
import matplotlib.pyplot as plt
from random import randint

dirsAndNums = {}
brains = [];
directoriesToBeIgorned = ["378104","386348","383593","379682","351423"];

class Tumor:
	def __init__(self,center,radius):
		self.center = center;
		self.radius = radius;
		self.intersectingFiles = [];
		self.lowestIntersection = center[2]-radius;
		self.highestInterseciton = center[2]+radius;

class Brain:
	def __init__(self,filename):
		self.ctTumor = None;
		self.mrTumor = None;
		self.ctLocations = None;
		self.mrLocations = None;
		self.ctOffset = 0;
		self.mriOffset = 0;
		self.filename = filename;
	def calculateOffsets(self):
		if self.ctLocations != None:
			self.calculateCTOffset();
		else:
			print("i'm " , self.filename , " and i have no ct data");
		if self.mrLocations != None and len(self.mrLocations) > 0:
			self.calculateMROffset();
		else:
			print("i'm " + self.filename + " and i have no MR data");

	def calculateCTOffset(self):
		midValue = (self.ctLocations[0] + self.ctLocations[len(self.ctLocations)-1])/2.0;
		self.ctOffset = midValue;
		self.ctLocations = [(x -midValue) for x in self.ctLocations];
		self.ctTumor.center = (self.ctTumor.center[0],self.ctTumor.center[1] - midValue,self.ctTumor.center[2]);
	def calculateMROffset(self):
		print("len: " , len(self.mrLocations));
		midValue = (self.mrLocations[0] + self.mrLocations[len(self.mrLocations)-1])/2.0;
		self.mriOffset = midValue;
		self.mrLocations = [(x -midValue) for x in self.mrLocations];
		self.mrTumor.center = (self.mrTumor.center[0],self.mrTumor.center[1] - midValue,self.mrTumor.center[2]);


def analyzeCatScan(catFile):
	try:
		ds = pydicom.dcmread(catFile);
	except:
		print("troublemaker: " + catFile);
		raise;
	if(ds.pixel_array).shape != (512,512):
		raise Exception("woah!!!!");
	
	try:
		loc = ds.SliceLocation;
	
		print("sl: ",ds.SliceLocation)
		return ds.SliceLocation;
	except:
		print("fail: ",catFile);
		return None;

def analyzeMRI(mriFile):
	try:
		ds = pydicom.dcmread(mriFile);
	except:
		print("troublemaker: " + mriFile);
		raise;
	if(ds.pixel_array).shape != (512,512):
		print("woah!!!! unusual size althought that shouldn't really matter...",(ds.pixel_array).shape,mriFile);
	
	try:
		loc = ds.SliceLocation;
		
		print("sl: ",ds.SliceLocation)
		return ds.SliceLocation;
	except:
		print("fail: ",mriFile);
		return None;

def tumourizeResultsDocument(resultsDocument):
	ds = None;
	try:
		ds = pydicom.dcmread(resultsDocument)
	except:
		print("that file name didn't fucking work you moron get yo head of you ass",resultsDocument)
		exit(0);
	typ = "ct";
	if "mr" in resultsDocument.lower():
		typ = "mr";
	xAvg,yAvg,zAvg,radius = generateCircleDataFromDS(ds);
	tumor = Tumor((xAvg,yAvg,zAvg),radius);
	return typ,tumor;


def populateDirectionalLists(sequences):
	xs = [];
	ys = [];
	zs = [];
	for eachContourSequence in sequences:
		try:
			eachContourSequence = eachContourSequence.ContourSequence
		except:
			print("inexistant sequence")
			continue;
		
		for eachContourWithinSequence in eachContourSequence:

			data = eachContourWithinSequence.ContourData;

			for i in range(len(data)):
				if i%3 == 0:
					xs.append(data[i]);
				elif i%3==1:
					ys.append(data[i]);
				else:
					zs.append(data[i])
					# colors.append(color);
	return xs,ys,zs

def generateCircleDataFromDS(ds):
	sequences = ds.ROIContourSequence;

	xs,ys,zs = populateDirectionalLists(sequences);

	xsum = 0;
	ysum = 0;
	zsum = 0;
	lenny = len(xs);
	for i in range(lenny):
		xsum += xs[i];
		ysum += ys[i]
		zsum += zs[i];
	xAvg = xsum/lenny;
	yAvg = ysum/lenny;
	zAvg = zsum/lenny;

	distances = 0.0;
	for x in range(len(xs)):
		distances += np.power((np.power(xs[x]-xAvg,2))+(np.power(ys[x]-yAvg,2))+(np.power(zs[x]-zAvg,2)),0.5);
	radius = float(distances)/lenny;
	return xAvg,yAvg,zAvg,radius;



def prepBrain(brain):
	


	nones = [];
	
	counter = 0;

	for root, dirs, files in os.walk(brain, topdown=False):
		for di in dirs:
			catLocations = [];
			mriLocations = [];
			
			counter += 1;
			colors = [];
			color = float(counter)/len(dirs);
			if (di in directoriesToBeIgorned):
				continue;
			dirsAndNums[di] = [0,0,0];
			brain = Brain(di);
			brains.append(brain);
			for filename in os.listdir(root+"/"+di):
				filePath =root+"/"+di+"/"+filename;
				f = open(filePath);
				simpleName = filename;
				if (simpleName[0:2]).lower() == "re":
					#throw it away;
					pass

				elif (simpleName[0:2]).lower() == "ct":
					slideLocation = analyzeCatScan(filePath);
					if slideLocation == None:
						nones.append(filePath);
					else:
						catLocations.append(slideLocation);

				elif (simpleName[0:2]).lower() == "mr":
					slideLocation = analyzeMRI(filePath);
					if slideLocation == None:
						nones.append(filePath);
					else:
						mriLocations.append(slideLocation);

				elif (simpleName[0:2]).lower() == "rs":
					typ, tumor = tumourizeResultsDocument(filePath);
					if typ == "ct":
						brain.ctTumor = tumor;
					elif typ == "mr":
						brain.mrTumor = tumor;
				else:
					print("(possibly tone donw and just ignore)",simpleName," in ",di);
					# raise Exception("un-accounted for file type here");
			catLocations.sort();
			mriLocations.sort();
			brain.ctLocations = catLocations;
			brain.mrLocations = mriLocations;

			# print("locations for brain: ",brain,"color: ",float(counter)/len(dirs),"counter = ",counter);
			thisColor = np.random.uniform(0,1);

			# plt.scatter([j for j in range(len(catLocations))],catLocations, cmap="prism", alpha=0.5)
			# plt.scatter([j for j in range(len(mriLocations))],mriLocations, cmap="prism", alpha=0.5)
			
			if counter >= 4 and False:
			# 	plt.show();
				return;
			# else:
			# 	# plt.show();
			# 	# return;
			# 	pass
		
			# plt.scatter([j for j in range(len(brain.catLocations))],brain.catLocations, cmap="prism", alpha=0.5)



prepBrain(headDirectory);
print("schuppw!")
# for brain in brains:
# 	print()

for brain in brains:
	print(brain.ctLocations);
	brain.calculateOffsets();
	plt.subplot(2, 1, 1)
	print(brain.ctLocations);
	plt.scatter([((-0.5*len(brain.ctLocations)) + x) for x in range(len(brain.ctLocations))], brain.ctLocations,cmap = "prism")


	plt.subplot(2, 1, 2)
	plt.scatter([((-0.5*len(brain.mrLocations)) + x) for x in range(len(brain.mrLocations))], brain.mrLocations,cmap = "prism")


plt.subplot(2, 1, 1)

plt.ylabel('adjusted thiccness (centered around 0)')
plt.title('ct data')
plt.grid(True)

plt.subplot(2, 1, 2)

plt.ylabel('adjusted thiccness (centered around 0)')
plt.title('mri data')
plt.grid(True)

plt.show()


for x in dirsAndNums:
	print(x,dirsAndNums[x],"\n");
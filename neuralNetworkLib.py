

def train(directory):
	for brain in directory:
		prepBrain(brain);

def addCatScan(catFile):
	

def addMRI(mriFile):
	todo: this method


def prepBrain(brain):
	for image in brain:
		simpleName = os.path.basename(f.name);
		if (simpleName[0:2]).lower() == "re":
			#throw it away;
			pass

		elif (simpleName[0:2]).lower() == "ct":
			addCatScan(image);
		elif (simpleName[0:2]).lower() == "mr":
			addMRI(image);
		else:
			print("(possibly tone donw and just ignore");
			raise Exception("un-accounted for file type here");


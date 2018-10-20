import os
import pydicom
import numpy as np
from matplotlib import animation
import matplotlib.pyplot as plt
import matplotlib.cm as cm
from mpl_toolkits.mplot3d import Axes3D

# filename = str(input("give the file name of the results file you'd like to parse"));
filename = '/Users/f002nb9/Documents/f002nb9/hackBudapest/dataSetFolderStuff/Dataset/386661/RS.386661.MR_1.dcm';
ds = None;
try:
	ds = pydicom.dcmread(filename)
except:
	print("that file name didn't fucking work you moron get yo head of you ass")
	exit(0);

sequences = ds.ROIContourSequence;
m =0;
for eachContourSequence in sequences:
	if len(eachContourSequence.ContourSequence) > m:
		m = len(eachContourSequence.ContourSequence);

rows = m;
cols = len(sequences);
fig = plt.figure()
tuuD = False;
# if tuuD:
# 	axes = [None]*rows*cols;
# 	print(axes);
# 	counter = 0;
# 	for x in range(rows):
# 		for y in range(cols):
# 			counter += 1;
# 			axes[counter-1]=fig.add_subplot(rows,cols,counter);
# 	print(axes);

# 	counter = 0;



# 	for eachContourSequence in sequences:

# 		eachContourSequence = eachContourSequence.ContourSequence
# 		for eachContourWithinSequence in eachContourSequence:
# 			data = eachContourWithinSequence.ContourData;
# 			xs = [];
# 			ys = [];
# 			counter += 1;
# 			plt.subplot(rows,cols,counter);


# 			for i in range(len(data)):
# 				if i%3 == 2:
# 					pass;
# 				elif i%3==0:
# 					xs.append(data[i]);
# 				else:
# 					ys.append(data[i])
# 			plt.scatter(xs,ys);
# 			axes[counter-1].title.set_text("Contour n. " + str(counter % rows + 1) + " Sequence: " + str(int(counter/cols)))
# else:
ax = fig.add_subplot(121, projection='3d')
ax2 = fig.add_subplot(122, projection='3d')
xs = [];
ys = [];
zs = [];
colors = [];

# plt.axis('off')

def init():
	ax.scatter(xs, ys, zs, c=colors, alpha=0.6)
	return ax
def animate(i):
	ax.view_init(elev=10., azim=i)
	return ax

counter = 0;

for eachContourSequence in sequences:
	# counter += 1;

	eachContourSequence = eachContourSequence.ContourSequence
	
	for eachContourWithinSequence in eachContourSequence:

		data = eachContourWithinSequence.ContourData;
		# colors = cm.rainbow(np.linspace(0, 1, len(data)/3))
		
		
		counter += 1;
		# plt.subplot(rows,cols,counter);
		color = float(counter)/rows;
		

		
		for i in range(len(data)):
			if i%3 == 0:
				xs.append(data[i]);
			elif i%3==1:
				ys.append(data[i]);
			else:
				zs.append(data[i])
				colors.append(color);
				

	ax.scatter(xs, ys, zs,c=colors)
	
	
	# anim = animation.FuncAnimation(fig, animate, init_func=init,
 #                           frames=15, interval=100)

	# mywriter = animation.FFMpegWriter(fps=40)
	# anim.save('mymovie2.mp4',writer=mywriter)

			# axes[counter-1].title.set_text("Contour n. " + str(counter % rows + 1) + " Sequence: " + str(int(counter/cols)))


rsum = 0;
for x in xs:
	rsum += x;
xAvg = rsum/len(xs);

rsum = 0;
for y in ys:
	rsum += y;
yAvg = rsum/len(ys);

rsum = 0;
for z in zs:
	rsum += z;
zAvg = rsum/len(zs);

distances = 0.0;
for x in range(len(xs)):
	distances += np.power((np.power(xs[x]-xAvg,2))+(np.power(ys[x]-yAvg,2))+(np.power(zs[x]-zAvg,2)),0.5);
radius = float(distances)/len(xs);
print("radius: ",radius)
xs2 = []
ys2 = []
zs2 = [];
colors2=[];

numz = 20
for z in range(-1*numz,numz):
	rad = radius*z/numz;
	color = (z+numz)/(2*numz)
	for theta in range(-1*numz,numz):
		theta = 2*np.pi*theta/numz;
		for phi in range(0,numz):
			phi = 2*np.pi*phi/numz;
			x = rad*np.cos(theta)*np.sin(phi)
			y = rad *np.sin(theta)*np.sin(phi)
			z = rad*np.cos(phi)
			
			xs2.append(x)
			ys2.append(y)
			zs2.append(z)
			colors2.append(color);

	# z=z*radius/numz;
	# curRad = np.absolute(np.absolute(radius)-np.absolute(z));
	# print("curRad: ",curRad)
	# for theta in range(0,numz):
	# 	theta = theta*2*np.pi/numz;
	# 	xs2.append(np.cos(theta)*curRad)
	# 	ys2.append(np.sin(theta)*curRad)
	# 	zs2.append(z)


ax2.scatter(xs2, ys2, zs2,c=colors2)

print("avg: (",xAvg,",",yAvg,",",zAvg);
plt.show();





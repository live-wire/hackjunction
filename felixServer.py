from flask import Flask, request
import json
from waitress import serve
import base64
import pydicom
from pydicom.data import get_testdata_files
app = Flask(__name__)
from random import randint;
# app.run(debug=True)

# from final_model import get_result
from flask import render_template

cpu = "--"




@app.route("/",methods = ['GET'])
def root():
    print("allen");
    # Loads the index.html in templates/
    return render_template('felixIndex.html', message="Hola PR!")
  

@app.route("/classify", methods=['GET', 'POST'])
def classify():
    content = request.get_json(silent=True)
    # Got image encoded in base 64, need to convert it to png
    blah = content['base64image']
    blah = blah.replace("data:image/png;base64,","")
    blah = blah.replace(" ","+")
    if content:
        # converting base64 image to png
        with open("imageToSave.png", "wb") as fh:
            fh.write(base64.decodebytes(bytes(blah,'utf-8')))
        im = Image.open("imageToSave.png")
        # now we need a jpg image from the available png
        # converting png to jpg
        bg = Image.new("RGB", im.size, (255, 255, 255))
        bg.paste(im, im)
        bg.save("imageToSave.jpg")
        # Getting prediction for the jpg
        result = get_result("imageToSave.jpg")
        print("PREDICTION:",result)
        return json.dumps({'Status':'OK','prediction':result})
    else:
        return json.dumps({"Status":"ERROR"})

@app.route("/testPostMethod", methods=['POST'])
def testPostMethod():
    fileNames = [];
    for x in request.files:
        fileName = request.files[x].filename;
        ds = pydicom.dcmread(request.files[x]);
        fileNames.append(ds.PatientName);
        
    return json.dumps({'fileNames':str(fileNames)});
    # return str(fileNames);


"""
method: shell for the neural network procedure.
@params: a normal python list of parameters that 
match the expected parameters of the network. 
It will roughly have following structure:
[firstMriSliceGreyscalePixel1,firstMriSliceGreyscalePixel2,...,nthMriSliceGreyscalePixelm,metadata1,...metadata_r]

@return does the neural network black boxy shit2
"""
def doNeuralNetworkStuff(inputList):
    #bla(inputList);
    if random.randint % 2 == 0:
        return True;
    return False;



@app.route("/job")
def job():
    return json.dumps({'Status':'OK'})

if __name__ == "__main__":
    serve(app,host='127.0.0.1', port=5000)
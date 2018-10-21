from flask import Flask, request
from flask_cors import CORS
import json
from waitress import serve
import base64
import pydicom
import io
from flask import Response
from pydicom.data import get_testdata_files
app = Flask(__name__)
CORS(app)
from random import randint;
from contourLinePlotter import createPlot
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
# app.run(debug=True)

# from final_model import get_result
from flask import render_template

cpu = "--"
from preparation import dcmprocess as dp




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
    print("testing post method")
    fileNames = [];
    retval = dp.extractMetaData(request.files['0'])
    dumps = json.dumps(retval)
    print("done dumping!!!\n\n");
    print(dumps);
    return dumps;
    # return str(fileNames);

@app.route("/generate3dGif",methods=['POST'])
def generate3dGif():
    print("reqd erstmal")
    fileNames = [];
    file = request.files['file'];
    fig = createPlot(file,True);
    print("hello world")
    return "hello_world";


@app.route("/generate3dTumorModel",methods=['POST'])
def generate3dTumorModel():
    fileNames = [];
    file = request.files['file'];
    fig = createPlot(file,False);
   
    output = io.BytesIO()
    FigureCanvas(fig).print_png(output)
    return Response(output.getvalue(), mimetype='image/png')


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
    serve(app,host='127.0.0.1', port=8101)
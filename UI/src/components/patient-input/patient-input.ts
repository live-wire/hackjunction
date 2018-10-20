import { Component } from '@angular/core';
import * as dwv from '../../assets/dwv/dist/dwv.min';
/**
 * Generated class for the PatientInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'patient-input',
  templateUrl: 'patient-input.html'
})
export class PatientInputComponent {
  //public inputSelector = document.getElementById("brainImagesSelector");
    constructor() {
  }

  // <script src="static/dwv/dist/dwv.min.js"></script>
  // <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>


//   public sendToServer() {
//     alert("borf diddly");
//     var data = new FormData();
//     for (var i = 0; i < this.inputSelector.files.length; i ++){
//         data.append(i.toString(), this.inputSelector.files[i])    
//     }


    
//     fetch("/testPostMethod",
//     {
//         method: "POST",
//         body: data
//     }).then(function(res){
//         res.json().then(function(data){
//             console.log(data);
//             document.getElementById("answerBox").innerHTML="server says: "+data['fileNames'];
//         })
//     })
//     .then(function(data){ console.log( JSON.stringify( data ) ) });

// }


// ////DWV init stuff
// // base function to get elements
// dwv.gui.getElement = dwv.gui.base.getElement;
// dwv.gui.displayProgress = function (percent) {};

// // create the dwv app
// var app = new dwv.App();
// // initialise with the id of the container div
// app.init({
//     "containerDivId": "dwv",
//     "tools" : ["Scroll"],
// });
// ///////


// public loadDWVImages(images){
//     var brainFiles = document.getElementById("brainImagesSelector");
//     var retText = "";
//     if ('files' in brainFiles){
//         if (brainFiles.files.length == 0){
//             retText = "select yoself some files homes";
//         }else{
//             alert("loadin up files homes");
           
//             console.log(brainFiles.files)
//             app.loadFiles(brainFiles.files);
//             console.log("schwupps");
//             console.log("diwupps");

//         }
//     }
// }

 
  

}

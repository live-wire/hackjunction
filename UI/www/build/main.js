webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/f002nb9/Documents/f002nb9/hackBudapest/hackjunction/UI/src/pages/home/home.html"*/'<ion-content>\n   <div class="logo-wrapper">\n      <img id="logo" src="../../assets/imgs/logo.png">\n      <img id="junction" src="../../assets/icon/junction.png">\n   </div> \n  <!-- <div name="title">Train Tumors</div> -->\n  <div class="wrapper">\n    <patient-input class="column box effect8" name="input"></patient-input>\n    <meta-data class="column" name="meta"></meta-data>\n    <patient-output class="column" name="output"></patient-output>\n  </div>\n  <div class="wrapper-two">\n      <ct-photos class="column" name="ct"></ct-photos>\n      <mr-photos class="column" name="mr"></mr-photos>\n      <dimensional-model class="column" name="model"></dimensional-model>\n  \n    </div>\n  <!-- <img class="varian" height="36" width="138.4" src="../../assets/icon/varian.png"> -->\n</ion-content>\n'/*ion-inline-end:"/Users/f002nb9/Documents/f002nb9/hackBudapest/hackjunction/UI/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_patient_input_patient_input__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_meta_data_meta_data__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_patient_output_patient_output__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ct_photos_ct_photos__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dimensional_model_dimensional_model__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_mr_photos_mr_photos__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__components_patient_input_patient_input__["a" /* PatientInputComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_meta_data_meta_data__["a" /* MetaDataComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_patient_output_patient_output__["a" /* PatientOutputComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_mr_photos_mr_photos__["a" /* MrPhotosComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_ct_photos_ct_photos__["a" /* CtPhotosComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_dimensional_model_dimensional_model__["a" /* DimensionalModelComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/f002nb9/Documents/f002nb9/hackBudapest/hackjunction/UI/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/f002nb9/Documents/f002nb9/hackBudapest/hackjunction/UI/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PatientInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PatientInputComponent = /** @class */ (function () {
    function PatientInputComponent(navCtrl, elementRef) {
        this.navCtrl = navCtrl;
        this.elementRef = elementRef;
    }
    PatientInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'patient-input',template:/*ion-inline-start:"/Users/f002nb9/Documents/f002nb9/hackBudapest/hackjunction/UI/src/components/patient-input/patient-input.html"*/'<div class="component-header">\n    <div class="subtitle">Patient Image</div>\n    <img height="40" width="40" class="icon" src="../../assets/icon/upload.png">\n</div>\n<div class="properties-wrap">\n    <div class="elements">\n        <div class="upload-btn-wrapper">\n                <h1 id="answerBox"></h1>\n            <form action = "javascript:sendToServer()" method = "post">     \n                <button class="btn">Upload a file</button>\n                <input type="file" type="file" multiple id ="brainImagesSelector" name="brainImagesSelector" onchange="loadDWVImages(); sendToServer(); generate3dTumorModel(); generate3dGif();" webkitdirectory mozdirectory/>\n            </form>\n        </div>    \n    </div>\n</div>\n'/*ion-inline-end:"/Users/f002nb9/Documents/f002nb9/hackBudapest/hackjunction/UI/src/components/patient-input/patient-input.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], PatientInputComponent);
    return PatientInputComponent;
}());

//# sourceMappingURL=patient-input.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetaDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MetaDataComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MetaDataComponent = /** @class */ (function () {
    function MetaDataComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MetaDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'meta-data',template:/*ion-inline-start:"/Users/f002nb9/Documents/f002nb9/hackBudapest/hackjunction/UI/src/components/meta-data/meta-data.html"*/'<div class="component-header">\n    <div class="subtitle">Patient Information</div>\n    <img height="40" width="40" class="icon" src="../../assets/icon/info.png">\n</div>\n<div class="properties-wrap">\n  <div class="elements">\n    <div>    \n      <div class="text">Name: </div> \n      <div class="details name"></div>\n    </div>\n    <div>    \n      <div class="text">ID: </div> \n      <div class="details id"></div>\n    </div>\n    <div>\n      <div class="text">Birth: </div> \n      <div class="details dateOfBirth"></div>\n    </div>\n    <div>    \n      <div class="text">Sex: </div> \n      <div class="details sex"></div>\n    </div>\n    <div>    \n      <div class="text">Image taken on: </div> \n      <div class="details imageDate"></div>\n    </div>\n    <div>    \n      <div class="text">Institution: </div> \n      <div class="details doctor"></div>\n    </div>\n    <div>    \n      <div class="text notes">Notes: </div> \n      <div class="details notes"></div>\n    </div>\n</div>'/*ion-inline-end:"/Users/f002nb9/Documents/f002nb9/hackBudapest/hackjunction/UI/src/components/meta-data/meta-data.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], MetaDataComponent);
    return MetaDataComponent;
}());

//# sourceMappingURL=meta-data.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientOutputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the PatientOutputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PatientOutputComponent = /** @class */ (function () {
    function PatientOutputComponent() {
        this.hasCancer = false;
        this.showCancerInfo = false;
    }
    PatientOutputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'patient-output',template:/*ion-inline-start:"/Users/f002nb9/Documents/f002nb9/hackBudapest/hackjunction/UI/src/components/patient-output/patient-output.html"*/'<div class="component-header">\n    <div class="subtitle">Diagnostic Image</div>\n    <img height="40" width="40" class="icon" src="../../assets/icon/brain.png">\n</div>\n<div class="properties-wrap">\n    <div class="elements brain">\n            <div id="dwv">\n                    <div class="layerContainer">\n                        <canvas class="imageLayer"></canvas>\n                    </div>\n                </div>\n        <!-- <ion-img width="260" height="260" src="../assets/imgs/patient-brain.jpg"></ion-img> -->\n    </div>\n<div class="cancer-info" *ngIf="showCancerInfo">\n    <ion-icon *ngIf="!hasCancer" name="checkmark-circle"> no cancer detected</ion-icon>\n    <ion-icon *ngIf="hasCancer" name="close-circle"> potential cancer detected</ion-icon>\n</div>\n    <!-- <img class="nocancer" height="40" width="40" src="../../assets/icon/nocancer.png">\n    <img class="cancer" height="40" width="40" src="../../assets/icon/x.png"> -->\n</div>\n\n'/*ion-inline-end:"/Users/f002nb9/Documents/f002nb9/hackBudapest/hackjunction/UI/src/components/patient-output/patient-output.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PatientOutputComponent);
    return PatientOutputComponent;
}());

//# sourceMappingURL=patient-output.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtPhotosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the CtPhotosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CtPhotosComponent = /** @class */ (function () {
    function CtPhotosComponent() {
        console.log('Hello CtPhotosComponent Component');
        this.text = 'Hello World';
    }
    CtPhotosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ct-photos',template:/*ion-inline-start:"/Users/f002nb9/Documents/f002nb9/hackBudapest/hackjunction/UI/src/components/ct-photos/ct-photos.html"*/'<div class="component-header">\n    <div class="subtitle">CT Images</div>\n    <img height="40" width="40" class="icon" src="../../assets/icon/ct.png">\n</div>\n<div class="properties-wrap">\n    <div class="elements brain">\n           <div id="ct-photo-placeholder"></div>\n        <!-- <ion-img width="260" height="260" src="../assets/imgs/patient-brain.jpg"></ion-img> -->\n    </div>\n<div class="cancer-info" *ngIf="showCancerInfo">\n    <ion-icon *ngIf="!hasCancer" name="checkmark-circle"> no cancer detected</ion-icon>\n    <ion-icon *ngIf="hasCancer" name="close-circle"> potential cancer detected</ion-icon>\n</div>\n    <!-- <img class="nocancer" height="40" width="40" src="../../assets/icon/nocancer.png">\n    <img class="cancer" height="40" width="40" src="../../assets/icon/x.png"> -->\n</div>\n\n'/*ion-inline-end:"/Users/f002nb9/Documents/f002nb9/hackBudapest/hackjunction/UI/src/components/ct-photos/ct-photos.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CtPhotosComponent);
    return CtPhotosComponent;
}());

//# sourceMappingURL=ct-photos.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DimensionalModelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the DimensionalModelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DimensionalModelComponent = /** @class */ (function () {
    function DimensionalModelComponent() {
        console.log('Hello DimensionalModelComponent Component');
        this.text = 'Hello World';
    }
    DimensionalModelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'dimensional-model',template:/*ion-inline-start:"/Users/f002nb9/Documents/f002nb9/hackBudapest/hackjunction/UI/src/components/dimensional-model/dimensional-model.html"*/'<div class="component-header">\n    <div class="subtitle">3D Model</div>\n    <img height="40" width="40" class="icon" src="../../assets/icon/model.png">\n</div>\n<div class="properties-wrap">\n    <div class="elements brain">\n\n        <div id="dwv">\n            <div class="layerContainer">\n                <!-- <canvas class="imageLayer"></canvas> -->\n                <img id ="3dModelImage"/>\n            </div>\n        </div>\n\n        <!-- <ion-img width="260" height="260" src="../assets/imgs/patient-brain.jpg"></ion-img> -->\n    </div>\n<div class="cancer-info" *ngIf="showCancerInfo">\n    <ion-icon *ngIf="!hasCancer" name="checkmark-circle"> no cancer detected</ion-icon>\n    <ion-icon *ngIf="hasCancer" name="close-circle"> potential cancer detected</ion-icon>\n</div>\n    <!-- <img class="nocancer" height="40" width="40" src="../../assets/icon/nocancer.png">\n    <img class="cancer" height="40" width="40" src="../../assets/icon/x.png"> -->\n</div>\n\n'/*ion-inline-end:"/Users/f002nb9/Documents/f002nb9/hackBudapest/hackjunction/UI/src/components/dimensional-model/dimensional-model.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DimensionalModelComponent);
    return DimensionalModelComponent;
}());

//# sourceMappingURL=dimensional-model.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MrPhotosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the MrPhotosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MrPhotosComponent = /** @class */ (function () {
    function MrPhotosComponent() {
        console.log('Hello MrPhotosComponent Component');
        this.text = 'Hello World';
    }
    MrPhotosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mr-photos',template:/*ion-inline-start:"/Users/f002nb9/Documents/f002nb9/hackBudapest/hackjunction/UI/src/components/mr-photos/mr-photos.html"*/'<div class="component-header">\n    <div class="subtitle">MR Images</div>\n    <img height="40" width="40" style="color: lightgray" class="icon" src="../../assets/icon/mr.png">\n</div>\n<div class="properties-wrap">\n    <div class="elements brain">\n        <div id="mr-photo-placeholder"></div>\n\n        <!-- <ion-img width="260" height="260" src="../assets/imgs/patient-brain.jpg"></ion-img> -->\n    </div>\n<div class="cancer-info" *ngIf="showCancerInfo">\n    <ion-icon *ngIf="!hasCancer" name="checkmark-circle"> no cancer detected</ion-icon>\n    <ion-icon *ngIf="hasCancer" name="close-circle"> potential cancer detected</ion-icon>\n</div>\n    <!-- <img class="nocancer" height="40" width="40" src="../../assets/icon/nocancer.png">\n    <img class="cancer" height="40" width="40" src="../../assets/icon/x.png"> -->\n</div>\n\n'/*ion-inline-end:"/Users/f002nb9/Documents/f002nb9/hackBudapest/hackjunction/UI/src/components/mr-photos/mr-photos.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MrPhotosComponent);
    return MrPhotosComponent;
}());

//# sourceMappingURL=mr-photos.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PatientInputComponent } from '../components/patient-input/patient-input';
import { MetaDataComponent } from '../components/meta-data/meta-data';
import { PatientOutputComponent } from '../components/patient-output/patient-output';
import { CtPhotosComponent } from '../components/ct-photos/ct-photos';
import { DimensionalModelComponent } from '../components/dimensional-model/dimensional-model';
import { MrPhotosComponent } from '../components/mr-photos/mr-photos';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PatientInputComponent,
    MetaDataComponent,
    PatientOutputComponent,
    MrPhotosComponent,
    CtPhotosComponent,
    DimensionalModelComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

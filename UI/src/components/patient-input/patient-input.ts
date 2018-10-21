import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';

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


  constructor(public navCtrl: NavController, public elementRef: ElementRef) {
    
  }
}

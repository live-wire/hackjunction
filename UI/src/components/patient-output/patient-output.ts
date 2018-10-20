import { Component, ElementRef } from '@angular/core';

/**
 * Generated class for the PatientOutputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'patient-output',
  templateUrl: 'patient-output.html'
})
export class PatientOutputComponent {
  
  public hasCancer;
  public showCancerInfo;

  constructor() {
    this.hasCancer = false;
    this.showCancerInfo = false;
  }
}

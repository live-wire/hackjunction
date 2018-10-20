import { Component } from '@angular/core';


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

  text: string;
  path: string = '';

  constructor() {
    
  }

  public changeView(){
    this.path='../assets/imgs/patient-brain.jpg'
}

}

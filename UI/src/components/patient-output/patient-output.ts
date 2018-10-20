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

  text: string;
  

  constructor(private elementRef: ElementRef) {}

  // public makeBigger() {
  //   let image = this.elementRef.nativeElement.querySelector('.imageLayer');
  //   image.
  // }
}

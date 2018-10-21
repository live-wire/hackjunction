import { Component } from '@angular/core';

/**
 * Generated class for the DimensionalModelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dimensional-model',
  templateUrl: 'dimensional-model.html'
})
export class DimensionalModelComponent {

  text: string;

  constructor() {
    console.log('Hello DimensionalModelComponent Component');
    this.text = 'Hello World';
  }

}

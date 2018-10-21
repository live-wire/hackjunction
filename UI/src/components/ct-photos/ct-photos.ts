import { Component } from '@angular/core';

/**
 * Generated class for the CtPhotosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ct-photos',
  templateUrl: 'ct-photos.html'
})
export class CtPhotosComponent {

  text: string;

  constructor() {
    console.log('Hello CtPhotosComponent Component');
    this.text = 'Hello World';
  }

}

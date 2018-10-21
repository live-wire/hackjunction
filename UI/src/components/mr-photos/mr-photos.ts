import { Component } from '@angular/core';

/**
 * Generated class for the MrPhotosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mr-photos',
  templateUrl: 'mr-photos.html'
})
export class MrPhotosComponent {

  text: string;

  constructor() {
    console.log('Hello MrPhotosComponent Component');
    this.text = 'Hello World';
  }

}

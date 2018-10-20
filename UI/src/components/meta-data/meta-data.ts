import { Component } from '@angular/core';

/**
 * Generated class for the MetaDataComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'meta-data',
  templateUrl: 'meta-data.html'
})
export class MetaDataComponent {

  text: string;

  constructor() {
    console.log('Hello MetaDataComponent Component');
    this.text = 'Hello World';
  }

}

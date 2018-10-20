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
  public name;
  public id;
  public dateOfBirth;
  public age;
  public sex;
  public doctor;
  public notes;

  constructor() {
    this.name = 'Felix Herron';
    this.id = 56833;
    this.dateOfBirth = '12.1.1978';
    this.age = 34;
    this.sex = 'female';
    this.doctor ='Czapmoney';
    this.notes = '"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo."'
  }

}

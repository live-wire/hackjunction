import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Recherche } from '../home/home';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
movie : Recherche;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.movie=navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}

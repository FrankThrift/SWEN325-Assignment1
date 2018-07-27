import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalsProvider } from '../../providers/globals/globals'
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  summoner = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private globals: GlobalsProvider) {
    this.summoner = globals.summoner;
  }


}

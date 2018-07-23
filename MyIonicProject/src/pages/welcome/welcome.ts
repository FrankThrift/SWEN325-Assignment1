import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  summoner = '1';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.summoner = navParams.get('currentUser');
  }
  setSummoner(name){
    summoner = name;
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { GlobalsProvider } from '../../providers/globals/globals'

@Component({
  selector: 'page-champions',
  templateUrl: 'champions.html'
})
export class ChampionPage {
  summoner = 'DEFAULT_SUMMONER_NAME';
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private globals: GlobalsProvider) {
    this.summoner = globals.summoner;
  }


}

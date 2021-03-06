import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SearchedForSummonerPage } from '../searched-for-summoner/searched-for-summoner';

import { RestProvider } from '../../providers/rest/rest';
import { GlobalsProvider } from '../../providers/globals/globals';
/**
 * Generated class for the SummonerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-summoner',
  templateUrl: 'summoner.html',
})
export class SummonerPage {
  region: string;
  summoner: string;
  searchingSummoner: '';
  constructor(public navCtrl: NavController, public navParams: NavParams,
     private globals: GlobalsProvider, private restProvider: RestProvider) {
    this.summoner = globals.summoner;
  }

  searchForSummoner(){
    this.globals.setSearchedForSummoner(this.searchingSummoner);
    this.navCtrl.push(SearchedForSummonerPage);

  }



}

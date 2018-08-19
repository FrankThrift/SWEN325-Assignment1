import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { RestProvider } from '../../providers/rest/rest';
import { GlobalsProvider } from '../../providers/globals/globals';
/**
 * Generated class for the SearchedForSummonerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-searched-for-summoner',
  templateUrl: 'searched-for-summoner.html',
})
export class SearchedForSummonerPage {
summonerObject: any;
matchHistory: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     private globals: GlobalsProvider, private restProvider: RestProvider) {
       this.getSummonerID();


  }

  getSummonerID(){
    this.restProvider.getSummoner(this.globals.searchingSummoner).then(data => {
      this.summonerObject = data;
      console.log(this.summonerObject);
      console.log(this.summonerObject.accountId);
      this.showMatchHistory();
    });
  }

  showMatchHistory(){
    this.restProvider.getMatchHistory(this.summonerObject.accountId).then(data => {
      this.matchHistory = data;
      console.log(this.matchHistory);
    });
  }


}

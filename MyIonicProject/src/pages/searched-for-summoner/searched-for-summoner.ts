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
summonerName: string;
matchHistory = new Array();
matchObject = <any>{};
  constructor(public navCtrl: NavController, public navParams: NavParams,
     private globals: GlobalsProvider, private restProvider: RestProvider) {
       this.getSummonerID();
       this.summonerName = globals.searchingSummoner;

  }

  getSummonerID(){
    this.restProvider.getSummoner(this.globals.searchingSummoner).then(data => {
      this.summonerObject = data;
      //console.log(this.summonerObject);
      //console.log(this.summonerObject.profileIconId);
      this.summonerName = this.globals.searchingSummoner;//really janky error handling
      //console.log(this.globals.searchingSummoner);
      this.showMatchHistory();
    }).catch(err => {
      console.log("sad boys");
    });

  }

  showMatchHistory(){
    this.restProvider.getMatchHistory(this.summonerObject.accountId).then(data => {
      this.matchObject = data;
      for(var match in this.matchObject.matches){
        this.matchHistory.push({
          champion: this.matchObject.matches[match].champion,
          gameId: this.matchObject.matches[match].gameId
        })
      }
      console.log(this.matchHistory);
    });


  }


}

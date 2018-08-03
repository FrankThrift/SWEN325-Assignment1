import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';

import { GlobalsProvider } from '../../providers/globals/globals';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-champions',
  templateUrl: 'champions.html'
})
export class ChampionPage {
  responseObject: any;
  champs = new Array();
  summoner = 'DEFAULT_SUMMONER_NAME';
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,
     private globals: GlobalsProvider, private restProvider: RestProvider) {
    this.summoner = globals.summoner;
    this.displayChampions();
  }

  displayChampions(){
    this.restProvider.getChampions()
    .then(data => {
      this.responseObject = data;
      console.log(this.responseObject);
      for(var champion in this.responseObject.data){
        if (!this.responseObject.data.hasOwnProperty(champion)) continue;
        this.champs.push({
          name: this.responseObject.data[champion].id,
          note: this.responseObject.data[champion].title,
        });
      }
      console.log(this.champs);
    });
  }



}

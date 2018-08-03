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
  champsDefault = new Array();//the entire array champions prior to change
  champs = new Array();//currently used champions in the list
  summoner = 'DEFAULT_SUMMONER_NAME';
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,
     private globals: GlobalsProvider, private restProvider: RestProvider) {
    this.summoner = globals.summoner;
    this.getChampionInformation();
  }

  getChampionInformation(){
    this.restProvider.getChampions()
    .then(data => {
      this.responseObject = data;
      this.jsonOfChamps = data;
      //console.log(this.responseObject);
      for(var champion in this.responseObject.data){
        if (!this.responseObject.data.hasOwnProperty(champion)) continue;
        this.champs.push({
          name: this.responseObject.data[champion].id,
          note: this.responseObject.data[champion].title,
        });
      }
      //console.log(this.champs);
    });
    this.champsDefault = this.champs;
  }

  resetChampions(){
    this.champs = this.champsDefault;
  }

  filterChampions(ev: any) {
    this.resetChampions();
    let val = ev.target.value;
    if (val && val.trim() !== '') {
      this.champs = this.champs.filter(function(champion) {
        return champion.name.toLowerCase().includes(val.toLowerCase());
      });
    }
  }



}

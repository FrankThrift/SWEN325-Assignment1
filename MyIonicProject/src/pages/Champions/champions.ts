import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'page-champions',
  templateUrl: 'champions.html'
})
export class ChampionPage {
  apiKey = "?api_key=RGAPI-e3097b6e-0843-4b92-8992-256564de1371"
  data;
  summoner = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {

  }

  getFreeChamions(){
    return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    this.http.get('https://oc1.api.riotgames.com/lol/platform/v3/champions?freeToPlay=true&'+this.apiKey)
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data = data;
        resolve(this.data);
      });
  });
  }
}

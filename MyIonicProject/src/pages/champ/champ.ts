import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';
import { GlobalsProvider } from '../../providers/globals/globals';

/**
 * Generated class for the ChampPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-champ',
  templateUrl: 'champ.html',
})
export class ChampPage {
  skins = new Array();//currently used champions in the list
  responseObject: any;
  championName = 'deafult';

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private restProvider: RestProvider, private globals: GlobalsProvider
  ) {
    this.setup();
    this.championName = globals.championSelected;

  }

  setup(){
    this.restProvider.getChampion(this.globals.championSelected)
    .then(data => {
      this.responseObject = data;
      for(var champion in this.responseObject.data){
        if (!this.responseObject.data.hasOwnProperty(champion)) continue;
        for(var skin in this.responseObject.data[champion].skins){
          this.skins.push({
            name: this.responseObject.data[champion].skins[skin].name.trim(),
            num: this.responseObject.data[champion].skins[skin].num
          });
        }

      }
      console.log(this.skins);

    });
  }

}
//<img src ="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/{{championName}}_{{skin.num}}.jpg.png" item-center>

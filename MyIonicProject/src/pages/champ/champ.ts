import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';
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
  abilities = {};
  responseObject: any;
  championName = 'deafult';

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private restProvider: RestProvider, private globals: GlobalsProvider,
  public alertCtrl: AlertController
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

          //passive: this.responseObject.data[champion].passive.image.full,
          this.abilities.q = this.responseObject.data[champion].spells[0].image.full,
          this.abilities.qDes = this.responseObject.data[champion].spells[0].description,
          this.abilities.w = this.responseObject.data[champion].spells[1].image.full,
          this.abilities.wDes = this.responseObject.data[champion].spells[1].description,
          this.abilities.e = this.responseObject.data[champion].spells[2].image.full,
          this.abilities.eDes = this.responseObject.data[champion].spells[2].description,
          this.abilities.r = this.responseObject.data[champion].spells[3].image.full,
          this.abilities.rDes = this.responseObject.data[champion].spells[3].description
      }
      //console.log(this.skins);
      console.log(this.abilities);
    });
  }

  showQAlert(){
    const alert = this.alertCtrl.create({
      title: this.championName + "'s Q'",
      subTitle: this.abilities.qDes,
      buttons: ['OK']
    });
    alert.present();
  }
  showWAlert(){
    const alert = this.alertCtrl.create({
      title: this.championName + "'s W",
      subTitle: this.abilities.wDes,
      buttons: ['OK']
      });
      alert.present();
  }
  showEAlert(){
    const alert = this.alertCtrl.create({
      title: this.championName + "'s E",
      subTitle: this.abilities.eDes,
      buttons: ['OK']
      });
      alert.present();
  }
  showRAlert(){
    const alert = this.alertCtrl.create({
      title: this.championName + "'s Ultimate",
      subTitle: this.abilities.rDes,
      buttons: ['OK']
      });
      alert.present();
  }



}
//<img src ="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/{{championName}}_{{skin.num}}.jpg.png" item-center>

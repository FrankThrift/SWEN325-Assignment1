import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalsProvider } from '../../providers/globals/globals'
import { AlertController } from 'ionic-angular';

import { ChampionPage } from '../champions/champions';
import { SummonerPage } from '../summoner/summoner';
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  summoner = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private globals: GlobalsProvider, public alertCtrl: AlertController) {
    this.summoner = globals.summoner;
    this.showAlert();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Welcome!',
      subTitle: ('Welcome to my SWEN325 app, ' + this.summoner),
      buttons: ['OK']
    });
    alert.present();
  }

  public goToChampions() {
      this.navCtrl.setRoot(ChampionPage);
      this.navCtrl.popToRoot();
  }

  public goToSearch() {
      this.navCtrl.setRoot(SummonerPage);
      this.navCtrl.popToRoot();
  }

}

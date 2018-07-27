import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { GlobalsProvider } from '../../providers/globals/globals'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, private globals: GlobalsProvider) { }

  public goToWelcome() {
    this.navCtrl.setRoot(WelcomePage);
    this.globals.setSummoner(this.username);
    this.navCtrl.popToRoot();
  }
}

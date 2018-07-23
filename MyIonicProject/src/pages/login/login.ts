import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  public goToWelcome() {
    this.navCtrl.setRoot(WelcomePage,{
      currentUser: this.username
    });
    this.navCtrl.popToRoot();
  }
}

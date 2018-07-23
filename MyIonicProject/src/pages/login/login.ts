import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
@IonicPage({
  name:"loginPage"
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  public goToWelcome() {
    this.navCtrl.push(welcomePage);
  }
}

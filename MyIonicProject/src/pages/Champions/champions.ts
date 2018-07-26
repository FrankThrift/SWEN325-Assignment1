import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-champions',
  templateUrl: 'champions.html'
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

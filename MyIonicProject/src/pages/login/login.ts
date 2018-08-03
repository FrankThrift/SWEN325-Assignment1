import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { GlobalsProvider } from '../../providers/globals/globals'
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private globals: GlobalsProvider, public alertCtrl: AlertController) {
      this.username = '';
    }

  public goToWelcome() {
    if(this.username!=''){
      this.navCtrl.setRoot(WelcomePage);
      this.globals.setSummoner(this.username);
      this.navCtrl.popToRoot();
    } else {
      this.promptLogin();
    }

  }

  public promptLogin(){
    const prompt = this.alertCtrl.create({
    title: 'Login',
    message: "Come on Summoner, enter a user name!",
    inputs: [
      {
        name: 'summonerName',
        placeholder: 'Summoner Name Here'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Login',
        handler: data => {
          this.username = data.summonerName;
          //console.log(data);
        }
      }
    ]
  });
  prompt.present();


  }

}

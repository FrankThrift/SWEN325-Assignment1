import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav} from 'ionic-angular';

//import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { ChampionPage } from '../pages/champions/champions';
import { SummonerPage } from '../pages/summoner/summoner';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GlobalsProvider } from '../providers/globals/globals';

/*
THIS PAGE IS TAKE DIRECTLY FROM THE TUTORIAL. IT WAS NOT SPECIFIED THAT WE SHOULD NOT INCLUDE
THIS AS A GOOD BASE FOR OUR APP, SO I LFET IT IN.
*/
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage:any = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Welcome Page', component: WelcomePage},
      { title: 'Champion Page', component: ChampionPage},
      { title: 'Summoner Search', component: SummonerPage},
      { title: 'Logout', component: LoginPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

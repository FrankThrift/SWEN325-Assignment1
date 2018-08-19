import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { ChampionPage } from '../pages/champions/champions';
import { ChampPage } from '../pages/champ/champ';
import { SummonerPage } from '../pages/summoner/summoner';
import { SearchedForSummonerPage } from '../pages/searched-for-summoner/searched-for-summoner';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalsProvider } from '../providers/globals/globals';
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    ChampionPage,
    ChampPage,
    SummonerPage,
    SearchedForSummonerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    ChampionPage,
    ChampPage,
    SummonerPage,
    SearchedForSummonerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalsProvider,
    RestProvider
  ]
})
export class AppModule {}

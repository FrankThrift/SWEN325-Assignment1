import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalsProvider {

  constructor() {

  }

  public summoner = 'default'
  public championSelected ='default'
  public searchingSummoner: string;

  public setSummoner(name){
    this.summoner = name;
  }

  public setChampion(name){
    this.championSelected = name;
  }

  public setSearchedForSummoner(name){
    this.searchingSummoner = name;
  }
}

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
  public setSummoner(name){
    this.summoner = name;
  }

}

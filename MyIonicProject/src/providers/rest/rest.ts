import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
apiKey = "&api_key=RGAPI-0a9aa70e-5cbd-403b-abc4-156b21994d0f";
squareURL = "http://ddragon.leagueoflegends.com/cdn/8.15.1/img/champion/";
championURL = "http://ddragon.leagueoflegends.com/cdn/8.15.1/data/en_US/champion.json";
  constructor(public http: HttpClient) {
  }


  getChampions() {
  return new Promise(resolve => {
    this.http.get(this.championURL).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}

getSquare(name){
  return new Promise(resolve => {
    this.http.get(this.squareURL + name + '.png').subscribe(data=>{
      resolve(data);
    }, err =>{
      console.log(err);
    });
  });
}



}

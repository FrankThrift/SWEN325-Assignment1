import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
apiKey = "&api_key=RGAPI-f8ae134b-2500-4b23-989f-7c0f5325050c";
squareURL = "http://ddragon.leagueoflegends.com/cdn/8.15.1/img/champion/";
championsURL = "http://ddragon.leagueoflegends.com/cdn/8.15.1/data/en_US/champion.json";
championURL = "http://ddragon.leagueoflegends.com/cdn/8.15.1/data/en_US/champion/"
  constructor(public http: HttpClient) {
  }


  getChampion(name){
    return new Promise(resolve => {
      this.http.get(this.championURL+name+'.json').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getChampions() {
    return new Promise(resolve => {
      this.http.get(this.championsURL).subscribe(data => {
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

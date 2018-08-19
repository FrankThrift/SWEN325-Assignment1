import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
apiKey = "api_key=RGAPI-70df2ea1-0496-4d51-9936-3afd030e1df2";
squareURL = "http://ddragon.leagueoflegends.com/cdn/8.15.1/img/champion/";
championsURL = "http://ddragon.leagueoflegends.com/cdn/8.15.1/data/en_US/champion.json";
championURL = "http://ddragon.leagueoflegends.com/cdn/8.15.1/data/en_US/champion/"
summonerURL = "https://oc1.api.riotgames.com/lol/summoner/v3/summoners/by-name/"
matchHistoryURL = "https://oc1.api.riotgames.com/lol/match/v3/matchlists/by-account/"
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

  getSummoner(name){
    return new Promise(resolve => {
      this.http.get(this.summonerURL+name+'?'+this.apiKey).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getMatchHistory(id){
    console.log(this.matchHistoryURL+id+'?endIndex=10'+'&'+this.apiKey);
    return new Promise(resolve => {
      this.http.get(this.matchHistoryURL+id+'?endIndex=10'+'&'+this.apiKey).subscribe(data => {
        resolve(data);
      }, err => {
        resolve(err);
        console.log(err);
      });
    });
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalsProvider } from '../globals/globals';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
apiKey = "api_key=RGAPI-98dfd3e2-23e3-4010-b6fc-e8823f74c2d7";
squareURL = "http://ddragon.leagueoflegends.com/cdn/8.15.1/img/champion/";
championsURL = "http://ddragon.leagueoflegends.com/cdn/8.15.1/data/en_US/champion.json";
championURL = "http://ddragon.leagueoflegends.com/cdn/8.15.1/data/en_US/champion/"
summonerURL = "https://oc1.api.riotgames.com/lol/summoner/v3/summoners/by-name/"
matchHistoryURL = "https://oc1.api.riotgames.com/lol/match/v3/matchlists/by-account/"
  constructor(public http: HttpClient, private globals: GlobalsProvider) {
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
        this.globals.setSearchedForSummoner("ERROR");
        console.log("why tho");
        resolve(err);
      });
    });
  }
  getMatchHistory(id){
    console.log(this.matchHistoryURL+id+'?endIndex=10'+'&'+this.apiKey);
    return new Promise(resolve => {
      this.http.get(this.matchHistoryURL+id+'?endIndex=10'+'&'+this.apiKey).subscribe(data => {
        resolve(data);
      }, error => {
        //console.log(err);
        //console.log("WE DONE MESSED UP");
      });
    });
  }
  /*
  getMatch(matchID){
    console.log(this.matchHistoryURL+id+'?endIndex=10'+'&'+this.apiKey);
    return new Promise(resolve => {
      this.http.get(this.matchHistoryURL+id+'?endIndex=10'+'&'+this.apiKey).subscribe(data => {
        resolve(data);
      }, error => {
        //console.log(err);
        //console.log("WE DONE MESSED UP");
      });
    });
  }*/


}

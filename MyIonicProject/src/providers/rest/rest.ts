import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
apiKey = "&api_key=RGAPI-bf871664-b1ca-484c-b414-08d00097c3de";
championURL = 'http://ddragon.leagueoflegends.com/cdn/8.14.1/data/en_US/champion.json'
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

}

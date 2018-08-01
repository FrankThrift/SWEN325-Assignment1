import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
apiKey = "&api_key=RGAPI-f6f060b1-9309-4c91-9980-e9820c2531e6";
url = 'https://oc1.api.riotgames.com/lol/platform/v3/champions?freeToPlay=false'
  constructor(public http: HttpClient) {
  }
  getChampions() {
  return new Promise(resolve => {
    console.log(this.url+this.apiKey)
    this.http.get(this.url+this.apiKey).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}

}

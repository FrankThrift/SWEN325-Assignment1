import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
apiKey = "?api_key=RGAPI-e3097b6e-0843-4b92-8992-256564de1371";
  constructor(public http: HttpClient) {
  console.log('Hello RestServiceProvider Provider');
  }
  getChampions() {
  //return new Promise(resolve => {
    //this.http.get(this.apiUrl+'/users').subscribe(data => {
    //  resolve(data);
    //}, err => {
    //  console.log(err);
    //});
//  });
}

}

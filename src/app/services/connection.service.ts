import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })

export class ConnectionService {
  // url = 'http://digiandco.com/#/hello';

  constructor(private http: HttpClient) {
  }

  // sendMessage(messageContent: any) {
  //   return this.http.post(this.url,
  //     JSON.stringify(messageContent),
  //     {headers: new HttpHeaders({'Content-type': 'applicaton/json'}), responseType: 'text'});
  // }
}

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }


  // how to get xml response
  getData() {
    return this.http.get('http://localhost:3000/client_token')
      .map((response: Response) => response.text());
      //.map(res => res.text())
  }
}
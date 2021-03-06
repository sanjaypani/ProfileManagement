import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class UserService {
  private baseUrl: String = 'http://localhost:8080/Api';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private _http: Http) { }

  getUser() {
    return this._http.get(this.baseUrl + '/User', this.options).map((response: Response) => response.json())
    .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    return Observable.throw(error || 'SERVER_ERROR');
  }

}

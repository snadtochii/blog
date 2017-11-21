import { Injectable } from '@angular/core';
import { Credentials } from '../../models/index';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private authUrl = environment.urls.login;

  private _isLoggedIn = false;
  
  public get isLoggedIn() {
    return this._isLoggedIn;
  }
  public set isLoggedIn(loggedIn) {
    this._isLoggedIn = loggedIn;
  }

  constructor(private http: HttpClient) { }

  login(credentials: Credentials): Observable<any> {
    return this.http.post(this.authUrl, credentials);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Url } from './url';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token: string = 'null'

  constructor(private _http: HttpClient) { }
  
  login (username: string, password: string): Observable<any>{
    const url = Url.getBaseUrl() + 'login';
    return this._http.post(
      url,    
      {
        "user":username,
        "password":password
      },
      httpOptions
    );
  }
  
  cleanToken() {
    this.token = 'null';
  }

  saveToken(token: string) {
    this.token = token;
  }

  getToken(): string{
    return this.token
  }
}


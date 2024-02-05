import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Url } from './url';


@Injectable({
  providedIn: 'root',
})

export class GitClientService {

  constructor(private _http: HttpClient, private _auth: LoginService) { }

  repos(user: string): Observable<any> {
    const url = Url.getBaseUrl() +'repos/' + user;

    const headers = new HttpHeaders()
      .set("accessToken",
        this._auth.getToken()
      );
    return this._http.get(url, { headers });
  }

}
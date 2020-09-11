import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { LoginResponse } from '../model/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string):
    Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${environment.APIHOST}/login/doLogin`, {
      email,
      password
    }
    );
    // this.http.post(
    //   environment.APIHOST + '/login/doLogin', {
    //   email: 'xxx@test.com',
    //   password: 'admin'
    // }
    // );
  }
}

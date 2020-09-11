import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from './model/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.APIHOST}/user`);
  }

  deleteById(id: string): Observable<any> {
    return this.http.delete(`${environment.APIHOST}/user/${id}`);
  }

  create(user: User): Observable<any> {
    return this.http.post(
      `${environment.APIHOST}/user`, user
    );
  }

  findById(id: string): Observable<User> {
    return this.http.get<User>(`${environment.APIHOST}/user/findById/${id}`);
  }

  update(id: string, user: User): Observable<any> {
    return this.http.put(
      `${environment.APIHOST}/user/${id}`, user
    );
  }
}

import { Injectable, Inject, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, URLSearchParams } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

  private baseUrl: string;

  constructor(
    private http: HttpClient,
    private injector: Injector
  ) {
    this.baseUrl = this.injector.get(ORIGIN_URL);
  }

  getUsers() {
    return this.http.get<User[]>(`${this.baseUrl}/api/users`);
  }

  getUser(user: User) {
    return this.http.get<User>(`${this.baseUrl}/api/users/` + user.id);
  }

  deleteUser(user: User) {
    return this.http.delete<User>(`${this.baseUrl}/api/users/` + user.id);
  }

  updateUser(user: User){
    return this.http.put<User>(`${this.baseUrl}/api/users/` + user.id, user);
  }

  addUser(newUserName: string) {
    return this.http.post<User>(`${this.baseUrl}/api/users`, { name: newUserName });
  }
}

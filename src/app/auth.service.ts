import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

export interface Iuser {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://nest-hosting.onrender.com';

  constructor(private http: HttpClient) { }

  register(data: Iuser) {
    return this.http.post(`${this.url}/users/signup`, data, {withCredentials: true});
  }

  login(data: Iuser) {
    return this.http.post(`${this.url}/users/signin`,  data, {withCredentials: true} );
  }
}

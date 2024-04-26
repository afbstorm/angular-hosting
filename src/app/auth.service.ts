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
  private url = 'https://express-hosting-1.onrender.com';

  constructor(private http: HttpClient) { }

  register(data: Iuser) {
    return this.http.post(`${this.url}/api/users/signup`, data, {withCredentials: true});
  }

  login(data: Iuser) {
    return this.http.post(`${this.url}/api/users/signin`,  data, {withCredentials: true} );
  }
}

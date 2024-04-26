import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Isales {
  brand: string,
  model: string,
  price: number,
  year: number,
  mileage: number,
  garage: string
}

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private url = 'https://nest-hosting.onrender.com';

  constructor(private http: HttpClient) { }

  createSale(data: Isales) {
    return this.http.post(`${this.url}/sales`, data, {withCredentials: true});
  }

  fetchUserSales(id: string) {
    return this.http.get(`${this.url}/sales/${id}`, {withCredentials: true});
  }
}

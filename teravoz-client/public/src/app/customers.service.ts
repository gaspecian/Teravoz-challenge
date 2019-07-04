import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:8000/customers/all';
  getCustomers(){
    return this.http.get<Customer[]>(this.url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(
    private http: HttpClient
  ) { }

  getCustomers() {
    return this.http.get(`v1/customers`);
  }

  addCustomers(customerObject: any) {
    return this.http.post(`v1/customers/create`, customerObject);
  }
}

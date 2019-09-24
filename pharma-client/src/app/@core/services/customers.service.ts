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
    let apiResponse = this.http.get(`http://localhost:5000/api/v1/customers`);
    console.log(apiResponse)
    return apiResponse
  }

  addCustomers(customerObject: any) {
    return this.http.post(`v1/customers/create`, customerObject);
  }
}

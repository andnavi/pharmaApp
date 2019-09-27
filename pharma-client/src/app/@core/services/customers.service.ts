import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private customerName = new BehaviorSubject('');
  currentCustomer = this.customerName.asObservable();
  
  constructor(
    private http: HttpClient
  ) { }

  setCustomerName(customerName: string) {
    this.customerName.next(customerName);
  }

  getCustomers() {
    return this.http.get(`v1/customers`);
  }

  addCustomers(customerObject: any) {
    return this.http.post(`v1/customers/create`, customerObject);
  }

  getCustomerBills(customerId: string) {
    return this.http.get(`v1/bill/${customerId}`);
  }

  getCustomerBillHistory(billId: string) {
    return this.http.get(`v1/payment/${billId}`);
  }


}

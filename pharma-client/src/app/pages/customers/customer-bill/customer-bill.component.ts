import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../../@core/services/customers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'customer-bill',
  templateUrl: './customer-bill.component.html',
  styleUrls: ['./customer-bill.component.scss']
})
export class CustomerBillComponent implements OnInit {

  customerBillArray: any = [];
  customerId: string;
  customerName: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private customersService: CustomersService
  ) { }

  ngOnInit() {
    this.customerId = this.activatedRoute.snapshot.paramMap.get('customerId');
    this.customersService.currentCustomer.subscribe(customer => this.customerName = customer);
    this.getCustomerBills();
  }

  getCustomerBills() {
    this.customersService.getCustomerBills(this.customerId)
      .subscribe(data => {
        this.customerBillArray = data;
      }, error => {
        console.log(error);
      });
  }

}

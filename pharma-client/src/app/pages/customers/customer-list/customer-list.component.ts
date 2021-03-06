import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../../@core/services/customers.service';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customersDataArray: any = [];

  constructor(
    private customersService: CustomersService
  ) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customersService.getCustomers()
      .subscribe(data => {
        console.log(data);
        this.customersDataArray = data;
      }, error => {
        console.log(error);
      });
  }

}

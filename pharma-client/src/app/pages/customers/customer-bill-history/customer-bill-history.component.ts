import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from '../../../@core/services/customers.service';

@Component({
  selector: 'customer-bill-history',
  templateUrl: './customer-bill-history.component.html',
  styleUrls: ['./customer-bill-history.component.scss']
})
export class CustomerBillHistoryComponent implements OnInit {

  billId: string;
  customerBillHistoryArray: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private customersService: CustomersService
  ) { }

  ngOnInit() {
    this.billId = this.activatedRoute.snapshot.paramMap.get('billId');
    this.getCustomerBillHistory();
  }

  getCustomerBillHistory() {
      this.customersService.getCustomerBillHistory(this.billId)
        .subscribe(data => {
          this.customerBillHistoryArray = data;
        }, error => {
          console.log(error);
        });
  }

  addAmount(paidAmount){
  
    let paymentObj = ({
        billId:this.billId,
        paidAmount:paidAmount
    })
    this.customersService.addPayment(paymentObj)
    .subscribe(data => {
      this.customerBillHistoryArray.push(data.newPayment)
    }, error => {
      console.log(error)
    })
  }
}

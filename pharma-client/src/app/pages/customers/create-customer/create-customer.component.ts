import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomersService } from '../../../@core/services/customers.service';

@Component({
  selector: 'create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  customerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomersService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.customerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: [''],
      email: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      avatar: ['']
    });
  }

  onSubmit() {
    const formValues = Object.assign({}, this.customerForm.value);
    this.customerService.addCustomers(formValues)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }
}

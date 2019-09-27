import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Custom Components
import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerBillComponent } from './customer-bill/customer-bill.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [
      {
        path: 'customer-list',
        component: CustomerListComponent
      },
      {
        path: 'create-customer',
        component: CreateCustomerComponent
      },
      {
        path: 'customer-bill/:customerId',
        component: CustomerBillComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

export const routedComponents = [
  CustomersComponent,
  CustomerListComponent,
  CreateCustomerComponent,
  CustomerBillComponent
];
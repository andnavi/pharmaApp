import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Custom Components
import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerBillComponent } from './customer-bill/customer-bill.component';
import { CustomerBillHistoryComponent } from './customer-bill-history/customer-bill-history.component';

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
      },
      {
        path: 'customer-bill-history/:billId',
        component: CustomerBillHistoryComponent
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
  CustomerBillComponent,
  CustomerBillHistoryComponent
];
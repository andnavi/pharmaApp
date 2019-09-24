import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Custom Components
import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [
      {
        path: 'customer-list',
        component: CustomerListComponent
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
  CustomerListComponent
];
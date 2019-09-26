import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Custom Components
import { CustomerBillsComponent } from './customer-bills.component';
import { CustomerBillsListComponent } from './customer-bills-list/customer-bills-list.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerBillsComponent,
    children: [
      {
        path: 'customer-bills-list',
        component: CustomerBillsListComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerBillsRoutingModule { }

export const routedComponents = [
  CustomerBillsComponent,
  CustomerBillsListComponent
]
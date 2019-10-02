import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'product-list',
        component: ProductListComponent
      },
      {
        path: 'add-product',
        component: AddProductComponent
      },
      {
        path: 'edit-product/:productId',
        component: EditProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

export const routedComponents = [
  ProductsComponent,
  ProductListComponent,
  AddProductComponent,
  EditProductComponent
];

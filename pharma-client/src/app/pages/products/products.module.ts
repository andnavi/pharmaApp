import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbInputModule, NbButtonModule, NbSpinnerModule, NbIconModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule, routedComponents } from './products-routing.module';

@NgModule({
  declarations: [...routedComponents],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbSpinnerModule,
    NbIconModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }

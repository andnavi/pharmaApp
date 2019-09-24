import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbButtonModule, NbInputModule } from '@nebular/theme';

import { CustomersRoutingModule, routedComponents } from './customers-routing.module';
@NgModule({
  declarations: [...routedComponents],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule
  ]
})
export class CustomersModule { }

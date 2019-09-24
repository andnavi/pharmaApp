import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';

import { CustomersRoutingModule, routedComponents } from './customers-routing.module';
@NgModule({
  declarations: [...routedComponents],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ThemeModule,
    NbCardModule
  ]
})
export class CustomersModule { }

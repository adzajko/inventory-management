import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CustomerListComponent } from 'src/app/components/customers/customer-list/customer-list.component';
import { CustomerSingleItemComponent } from 'src/app/components/customers/customer-single-item/customer-single-item.component';
import { AddCustomerComponent } from 'src/app/components/customers/add-customer/add-customer.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerSingleItemComponent,
    AddCustomerComponent
  ],
  imports: [CommonModule, SharedModule, CustomerRoutingModule],
  exports: [
    CustomerListComponent,
    CustomerSingleItemComponent,
    AddCustomerComponent,
    CustomerRoutingModule
  ]
})
export class CustomerModule {}

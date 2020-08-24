import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CustomerListComponent } from 'src/app/components/customers/customer-list/customer-list.component';
import { AddCustomerComponent } from 'src/app/components/customers/add-customer/add-customer.component';
import { CustomerSingleItemComponent } from 'src/app/components/customers/customer-single-item/customer-single-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer-dashboard' },
  {
    path: 'customer-dashboard',
    component: CustomerListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-customer',
    component: AddCustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: CustomerSingleItemComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}

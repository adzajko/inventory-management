import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/Customer.model';

@Component({
  selector: 'app-customer-single-item',
  templateUrl: './customer-single-item.component.html',
  styleUrls: ['./customer-single-item.component.scss']
})
export class CustomerSingleItemComponent implements OnInit {
  customer: Customer;

  constructor() {}

  ngOnInit(): void {
    if (window.history.state.id) {
      this.customer = window.history.state;
    }
  }
}

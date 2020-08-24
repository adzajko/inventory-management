import { Injectable } from '@angular/core';
import { Customer } from '../../models/Customer.model';
import { v4 as uuid } from 'uuid';
import { products } from '../product/product.service';
import { Observable, from } from 'rxjs';

const customers: Customer[] = [
  {
    id: uuid(),
    name: 'Customer 1',
    email: 'test@test.com',
    purchasedProducts: [products[0], products[1]]
  },
  {
    id: uuid(),
    name: 'Customer 2',
    email: '1@test.com',
    purchasedProducts: [products[2], products[1]]
  },
  {
    id: uuid(),
    name: 'Customer 3',
    email: '2@test.com',
    purchasedProducts: [products[5], products[3]]
  },
  {
    id: uuid(),
    name: 'Customer 4',
    email: '3@test.com',
    purchasedProducts: [products[4], products[2]]
  },
  {
    id: uuid(),
    name: 'Customer 5',
    email: '4@test.com',
    purchasedProducts: [products[4], products[5]]
  }
];

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor() {}

  getAllCustomers(): Observable<Customer[]> {
    return from([customers]);
  }

  getCustomerById(id: string): Customer[] {
    return customers.filter(customer => customer.id !== id);
  }

  addCustomer(customer: Customer): void {
    customers.push(customer);
  }
}

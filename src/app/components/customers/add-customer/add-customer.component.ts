import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/models/Product.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Customer } from 'src/app/models/Customer.model';
import { Router } from '@angular/router';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  productsList: Product[];
  addCustomerForm: FormGroup;
  constructor(
    private productsService: ProductService,
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.productsService.getAllProducts().subscribe(res => {
      this.productsList = res;
    });
  }

  initForm(): void {
    this.addCustomerForm = new FormGroup({
      customerName: new FormControl('', Validators.required),
      customerEmail: new FormControl('', Validators.email),
      productsArray: new FormControl('', Validators.required)
    });
  }

  onCustomerFormSubmit(): void {
    const helper: Customer = {
      id: uuid(),
      email: this.addCustomerForm.value.customerEmail,
      name: this.addCustomerForm.value.customerName,
      purchasedProducts: this.addCustomerForm.value.productsArray
    };
    this.customerService.addCustomer(helper);
    this.router.navigateByUrl('/customers');
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from '../../../models/Product.model';
import { v4 as uuid } from 'uuid';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;
  @ViewChild('content', { static: false }) content;
  constructor(
    private productsService: ProductService,
    private modalService: NgbModal,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.addProductForm = new FormGroup({
      productName: new FormControl('', Validators.required),
      productPrice: new FormControl(
        0,
        Validators.compose([Validators.required, Validators.maxLength(2)])
      )
    });
  }

  addNewProduct(): void {
    const newProduct: Product = {
      id: uuid(),
      name: this.addProductForm.value.productName,
      price: this.addProductForm.value.productPrice
    };

    this.productsService.addProduct(newProduct);
    this.toastr.success('Product has been added', 'Success!');
    this.modalService.open(this.content, { centered: true });
  }

  returnToList(): void {
    this.modalService.dismissAll();
    this.router.navigateByUrl('/products');
  }

  resetForm(): void {
    this.modalService.dismissAll();
    this.addProductForm.reset();
  }
}

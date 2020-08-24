import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit {
  productsList: Product[];

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(res => {
      this.productsList = res;
    });
  }
}

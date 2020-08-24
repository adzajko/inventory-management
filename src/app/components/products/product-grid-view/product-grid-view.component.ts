import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-grid-view',
  templateUrl: './product-grid-view.component.html',
  styleUrls: ['./product-grid-view.component.scss']
})
export class ProductGridViewComponent implements OnInit {
  productsList: Product[];

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(res => {
      this.productsList = res;
    });
  }
}

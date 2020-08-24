import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/Product.model';
import { ProductService } from '../../../services/product/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-single-item',
  templateUrl: './product-single-item.component.html',
  styleUrls: ['./product-single-item.component.scss']
})
export class ProductSingleItemComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private productService: ProductService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  deleteProduct(): void {
    this.productService.deleteProduct(this.product.id);
    this.toastr.success('Product deleted.', 'Success!');
  }
}

import { Injectable } from '@angular/core';
import { Product } from '../../models/Product.model';
import { v4 as uuid } from 'uuid';
import { from, Observable } from 'rxjs';

export const products: Product[] = [
  { id: uuid(), name: 'Product One', price: 1234.23 },
  { id: uuid(), name: 'Product Two', price: 41342.213 },
  { id: uuid(), name: 'Product Three', price: 16134514.65314 },
  { id: uuid(), name: 'Product Four', price: 35424.213 },
  { id: uuid(), name: 'Product Five', price: 14321.412 },
  { id: uuid(), name: 'Product Six', price: 12312.132 }
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}

  getAllProducts(): Observable<Product[]> {
    return from([products]);
  }

  addProduct(product: Product): void {
    products.push(product);
  }

  deleteProduct(productId: string): void {
    products.forEach((e, i) => {
      if (e.id === productId) {
        products.splice(i, 1);
      }
    });
  }
}

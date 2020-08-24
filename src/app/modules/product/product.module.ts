import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductDashboardComponent } from '../../components/products/product-dashboard/product-dashboard.component';
import { ProductGridViewComponent } from '../../components/products/product-grid-view/product-grid-view.component';
import { ProductListViewComponent } from '../../components/products/product-list-view/product-list-view.component';
import { ProductSingleItemComponent } from '../../components/products/product-single-item/product-single-item.component';
import { AddProductComponent } from '../../components/products/add-product/add-product.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductDashboardComponent,
    ProductGridViewComponent,
    ProductListViewComponent,
    ProductSingleItemComponent,
    AddProductComponent
  ],
  imports: [CommonModule, SharedModule, ProductRoutingModule],
  exports: [
    ProductDashboardComponent,
    ProductGridViewComponent,
    ProductListViewComponent,
    ProductSingleItemComponent,
    AddProductComponent,
    ProductRoutingModule
  ]
})
export class ProductModule {}

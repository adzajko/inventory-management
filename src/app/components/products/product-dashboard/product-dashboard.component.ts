import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  showListView = false;
  showGridView = true;

  constructor() {}

  ngOnInit(): void {}

  activateListView(): void {
    this.showListView = true;
    this.showGridView = false;
  }

  activateGridView(): void {
    this.showGridView = true;
    this.showListView = false;
  }
}

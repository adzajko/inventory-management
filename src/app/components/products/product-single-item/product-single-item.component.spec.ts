import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSingleItemComponent } from './product-single-item.component';

describe('ProductSingleItemComponent', () => {
  let component: ProductSingleItemComponent;
  let fixture: ComponentFixture<ProductSingleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSingleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSingleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

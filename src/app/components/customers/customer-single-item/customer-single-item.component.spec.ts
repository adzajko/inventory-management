import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSingleItemComponent } from './customer-single-item.component';

describe('CustomerSingleItemComponent', () => {
  let component: CustomerSingleItemComponent;
  let fixture: ComponentFixture<CustomerSingleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSingleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSingleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

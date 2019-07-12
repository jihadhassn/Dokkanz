import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemListingComponent } from './product-item-listing.component';

describe('ProductItemListingComponent', () => {
  let component: ProductItemListingComponent;
  let fixture: ComponentFixture<ProductItemListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

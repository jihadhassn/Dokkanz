import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemListingComponent } from './category-item-listing.component';

describe('CategoryItemListingComponent', () => {
  let component: CategoryItemListingComponent;
  let fixture: ComponentFixture<CategoryItemListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryItemListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryItemListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

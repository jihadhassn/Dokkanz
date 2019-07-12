import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedCategoryComponent } from './nested-category.component';

describe('NestedCategoryComponent', () => {
  let component: NestedCategoryComponent;
  let fixture: ComponentFixture<NestedCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

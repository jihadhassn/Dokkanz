import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { CategoryComponent } from './feature/category/category.component';
import { CategoryProductsComponent } from './feature/category-products/category-products.component';

import { CategoryService } from './feature/category/category.service';
import { NestedCategoryService } from './feature/category/nested-category/nested-category.service';
import { CategoryItemComponent } from './feature/category/category-item/category-item.component';
import { CategoryItemListingComponent } from './feature/category/category-item-listing/category-item-listing.component';
import { NestedCategoryComponent } from './feature/category/nested-category/nested-category.component';
import { RouterModule } from '@angular/router';
import { ProductItemComponent } from './feature/category-products/product-item/product-item.component';
import { ProductItemListingComponent } from './feature/category-products/product-item-listing/product-item-listing.component';
import { ProductService } from './feature/category-products/product.service';
import { AddCategoryComponent } from './feature/category/add-category/add-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { flush } from '@angular/core/testing';
import { AddProductComponent } from './feature/category-products/add-product/add-product.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CategoryComponent,
    CategoryProductsComponent,

    CategoryItemComponent,
    CategoryItemListingComponent,
    NestedCategoryComponent,
    ProductItemComponent,
    ProductItemListingComponent,
    AddCategoryComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CategoryComponent },
      // { path: 'category/add', component: CategoryComponent},
      { path: 'category/:id', component: CategoryProductsComponent },

      {path:'product/edit/:id',component:AddProductComponent},

      {path:'add',redirectTo:'/category/:id',pathMatch:'full'},
      // { path: 'category/:id/add', component: CategoryProductsComponent },
      // { path: '**', component: CategoryComponent },
    ]),
  ],
  providers: [CategoryService, NestedCategoryService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

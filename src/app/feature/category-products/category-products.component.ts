import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/_model/Product';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.sass']
})
export class CategoryProductsComponent implements OnInit {
 categoryProducts:Product[];
 nestedcatID:Number;
  constructor(private products:ProductService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id: number = +this.activatedRoute.snapshot.params.id;
    // this.nestedcatID=id;
    console.log(id);
    if(!this.categoryProducts){
      this.categoryProducts=this.products.getAllByNestedCategoryID(id);
    
      // console.log(this.products.getAll());
      console.log(this.categoryProducts)
    }
  }

}

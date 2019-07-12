import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/_model/Category';
import { NestedCategoryService } from '../nested-category/nested-category.service';
import { NestedCategory } from 'src/app/_model/NestedCategory';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.sass']
})
export class CategoryItemComponent implements OnInit {
@Input()category:Category;
@Input() subCat:NestedCategory[];

  constructor(private subcategories:NestedCategoryService) { }

  ngOnInit() {
    if(this.category){
      // console.log(this.category)
      // console.log(this.category.id);
      this.subCat=this.subcategories.getByCategoryID(this.category.id);
    }
    console.log(this.subCat)
   
  }

}

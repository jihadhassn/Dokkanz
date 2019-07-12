import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/_model/Category';

@Component({
  selector: 'app-category-item-listing',
  templateUrl: './category-item-listing.component.html',
  styleUrls: ['./category-item-listing.component.sass']
})
export class CategoryItemListingComponent implements OnInit {
@Input() categories:Category[];
  constructor() { }

  ngOnInit() {
    console.log(this.categories)

  }

}

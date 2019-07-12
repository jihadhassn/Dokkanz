import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/_model/Product';



@Component({
  selector: 'app-product-item-listing',
  templateUrl: './product-item-listing.component.html',
  styleUrls: ['./product-item-listing.component.sass']
})
export class ProductItemListingComponent implements OnInit {
  @Input() products: Product[];
  constructor() { }

  ngOnInit() {
  }

}

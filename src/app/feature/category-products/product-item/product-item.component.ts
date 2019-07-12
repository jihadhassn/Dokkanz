import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/_model/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass']
})
export class ProductItemComponent implements OnInit {
@Input() product:Product;
  constructor() { }

  ngOnInit() {
  }

}

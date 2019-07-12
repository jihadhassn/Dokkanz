import { Component, OnInit, Input } from '@angular/core';
import { NestedCategory } from 'src/app/_model/NestedCategory';

@Component({
  selector: 'app-nested-category',
  templateUrl: './nested-category.component.html',
  styleUrls: ['./nested-category.component.sass']
})
export class NestedCategoryComponent implements OnInit {
@Input() nested:NestedCategory[];
  constructor() { }

  ngOnInit() {
  }

}

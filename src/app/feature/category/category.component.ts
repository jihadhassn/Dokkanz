import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/_model/Category';
import { CategoryService } from './category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {
 data:Category[];

  constructor(private categories:CategoryService) { }

  ngOnInit() {
    // const id: number = +this.activatedRoute.snapshot.params.id;
    if(!this.data){
      this.data=this.categories.getAll();
      console.log(this.data)

    }
  }

}
 
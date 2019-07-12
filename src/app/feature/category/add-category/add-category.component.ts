import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/_model/Category';
import { CategoryService } from '../category.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.sass']
})
export class AddCategoryComponent implements OnInit {
  category: Category = {};

  constructor(private categoryService: CategoryService,private router: Router) { }

  ngOnInit() {
    // this.category=this.categoryService;
  }
  onAdd(myForm: NgForm) {
    this.category.name=myForm.value.txtName;
    this.category.image=myForm.value.txtImageUrl;
    this.category.description=myForm.value.txtDesc;
    console.log(this.category)
    if(this.category.name || this.category.image ||this.category.description )
    {
      this.categoryService.add(this.category);
    }
    // console.log(myForm)
    // console.log(this.categoryService.getAll());
    this.router.navigate(['/']);
  }
}

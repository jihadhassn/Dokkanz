import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/_model/Product';
import { ProductService } from '../product.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent implements OnInit {
  product: Product = {};
  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    const id: number = +this.activatedRoute.snapshot.params.id;
    this.product.fkNestedCategoryId = id;

    // this.addForm = new FormGroup({
    //   name: new FormControl(),
    //   image: new FormControl(),
    //   price: new FormControl(),
    //   code: new FormControl(),
    // })

  }

  onAdd(myForm: NgForm) {
    console.log(myForm);
    if (myForm.value.txtName || myForm.value.txtImageUrl || myForm.value.txtPrice || myForm.value.txtCode) {
      this.productService.add(this.product);
    }
    console.log(this.product.fkNestedCategoryId);
    this.router.navigate(['/category', this.product.fkNestedCategoryId]);

    // console.log(this.product);
    console.log(this.productService.getAllByNestedCategoryID(this.product.fkNestedCategoryId));
  }
}

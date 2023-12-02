import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product/product.model';
import { ProductService } from 'src/app/services/crudProduct/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  productForm = this.fb.group({
    name : ['' , Validators.required],
    price : ['' , Validators.required],
    description : [''],
  })
  constructor(
    private fb : FormBuilder,
    private productService: ProductService,
    private router: Router
    ){}

  

  addProduct(): void {
    // this.productService.addProduct(this.productForm.value)
    //   .subscribe(() => {
    //     // After adding, navigate to the product list or perform other actions
    //     this.router.navigate(['/products']);
    //   });
  }
}

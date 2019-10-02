import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../../@core/services/products.service';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      company: ['', Validators.required],
      batchNo: ['', Validators.required],
      MRP: ['', Validators.required],
      Rate: ['']
    });
  }


  onSubmit() {
    const formValues = Object.assign({}, this.productForm.value);
    this.productService.addProduct(formValues)
      .subscribe(data => {
        console.log(data); 
      }, error => {
        console.log(error);
      })
  }

}

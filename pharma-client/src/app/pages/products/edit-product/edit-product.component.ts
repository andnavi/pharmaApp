import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../../@core/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  productForm: FormGroup;
  productId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.createForm();
    this.productId = this.activatedRoute.snapshot.paramMap.get('productId');
    this.getProductById();
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

  getProductById() {
    this.productService.getProductById(this.productId)
      .subscribe((data: any) => {
        this.productForm.patchValue(data.data[0])
      }, error => {
        console.log(error);
      });
  }

  onSubmit() {
    const formValues = Object.assign({}, this.productForm.value, { _id: this.productId });
    this.productService.updateProduct(formValues)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }
}

import { Component, OnInit, ɵConsole } from '@angular/core';
import { ProductsService } from '../../../@core/services/products.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any = [];
  isLoading: boolean = true;

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe((data: any) => {
        if (!data.error) {
          this.products = data.data;
        }
        this.isLoading = false;
      }, error => {
        console.log(error);
      })
  }

  deleteProduct(productId: string) {
    this.productService.deleteProduct(productId)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

}

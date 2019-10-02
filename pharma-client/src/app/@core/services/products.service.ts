import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get(`v1/products`);
  }

  addProduct(product: any) {
    return this.http.post(`v1/products/add`, product);
  }

  getProductById(productId: string) {
    return this.http.get(`v1/products/${productId}`);
  }

  updateProduct(product: any) {
    return this.http.patch(`v1/products/${product._id}`, product);
  }

  deleteProduct(productId: string) {
    return this.http.delete(`v1/products/${productId}`);
  }
}

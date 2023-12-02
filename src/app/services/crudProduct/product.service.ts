import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { listProduct } from 'src/app/models/product/product';
import { Product } from 'src/app/models/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Observable<Product[]> {
    return of(listProduct);
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(listProduct.find(product => product.id === id));
  }

  addProduct(product: Product): Observable<void> {
    product.id = this.generateProductId();
    listProduct.push(product);
    return of();
  }

  updateProduct(id: number, updatedProduct: Product): Observable<void> {
    const index = listProduct.findIndex(product => product.id === id);
    if (index !== -1) {
      listProduct[index] = updatedProduct;
    }
    return of();
  }

  deleteProduct(id: number): Observable<void> {
    const index = listProduct.findIndex(product => product.id === id);
    if (index !== -1) {
      listProduct.splice(index, 1);
    }
    return of();
  }

  private generateProductId(): number {
    // Générer un nouvel ID unique. Ceci est un exemple simple.
    return Math.floor(Math.random() * 1000);
  }
}

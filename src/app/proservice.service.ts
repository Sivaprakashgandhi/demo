import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProserviceService {
  readonly filePath = "./assets/products.json"
  
  products: Product[]=[];

  constructor(private httpService: HttpClient) { }

  addProduct(addedProduct:Product) {

    this.products.push(addedProduct);//post
  }
  getProductsInitially(): Observable<Product[]> {
    //this function runs for first time
   return this.httpService.get<Product[]>(this.filePath);//get,post ,put,delete
  }
  setProductsInitially(productsList: Product[]) {
    //set the products array for future use
    this.products = productsList; 
  }
  getSetProducts() {
    // get the set products, which runs after first time
    return this.products; 
  }

  onDeleteProduct(product: Product) {
    //deleting the data
    let index = this.products.indexOf(product);//0
    this.products.splice(index, 1);//including and excluding
  }

  onUpdateProduct() {

  }
}

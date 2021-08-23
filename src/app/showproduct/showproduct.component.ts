import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProserviceService } from '../proservice.service';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {

  products:Product[]=[];
  constructor(private proservice: ProserviceService) { }

  ngOnInit() {
    this.getEmployees();
  }
  onDelete(deletedProduct: Product){
    this.proservice.onDeleteProduct(deletedProduct); //deleting the employee
  }
  
  getEmployees() {
     //adding employees or getting data of employees
    if(this.proservice.getSetProducts().length==0)
    {
      this.proservice.getProductsInitially().subscribe((prodsFetched)=>{
      this.products = prodsFetched;
      this.proservice.setProductsInitially(this.products);
      },(error)=>console.log(error));
    }
    else
    {
      this.products=this.proservice.getSetProducts();
    }
  }

}

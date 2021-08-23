import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProserviceService } from '../proservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private proservice: ProserviceService,private router: Router) { }

  ngOnInit() {
    if(!this.proservice.getSetProducts())
    {
      this.proservice.getProductsInitially().subscribe((prodsFetched)=>{
      this.proservice.setProductsInitially(prodsFetched);
      },(error)=>console.log(error));
    }
    
  }

  onSubmit(productToBeAdded:Product){
    this.proservice.addProduct(productToBeAdded);
    this.router.navigate(['/showProd']);
  }


}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: any;
  constructor(private apiservice: ApiService,private cartService:CartService) { }
  ngOnInit(): void {
    this.apiservice.getProduct().subscribe(res => {
      this.productList = res;
      
      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      });
      console.log("Data responce is:", res);
    })
  }
        
    addtocart(item:any)
    {
      this.cartService.addtocart(item);            
    }
}

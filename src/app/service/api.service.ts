import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpCLient:HttpClient) { }

       getProduct()
       {
         return this.httpCLient.get('https://fakestoreapi.com/products/').pipe(map((res:any)=>{
           return res;
           console.log("Service responce is:",res);
         }))
       }
}

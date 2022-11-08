import { Injectable } from "@angular/core";
@Injectable()
export class ProductService{
    

  constructor(
    private HttpClient:HttpClient{

    }
  )
     {
      
      public getProducts(): Observable<Product[]>{
        
    return this.HttpClient.get<Product[]>('http:/pet-esteban.ru/ited-api/marketplace/users/irina/data')
      }

    import {
        HttpClient
    }
    from '@angular/common/http'
import { Observable } from "rxjs";

    imports:[
        HttpClient
    ]
  }
}



export interface  Product{
    
    name: string;
    price:number;
    components:string;
    image:''
    
        
}
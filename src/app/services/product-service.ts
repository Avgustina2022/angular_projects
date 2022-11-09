import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class ProductService{

  constructor(
    private httpClient: HttpClient
  ) {}
      
  public getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>('https://pet-esteban.ru/ited-api/marketplace/users/irina/data');
  }
}

export interface Product{   
  name: string;
  price: number;
  components: string;
  image: string;
}
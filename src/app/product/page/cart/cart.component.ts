import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit 


{
  cart:Product[]=[];
  constructor(private cartService:cartService) { }

  ngOnInit(): void {
    this.cart=this.cartService.getCart()
  }

}

export class CartService{
  cart:Product[]=[];

}
addToCart (product.Product){
  this.cart.push(product);
}

getProduct(){
  return this.cart;
}
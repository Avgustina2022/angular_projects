import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../services/product-service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() inputproduct!:Product;
quantity: number=1;
  
  constructor(private cartService:CartService) {}

  ngOnInit(): void {
  }
increaseQuantity(){
  this.quantity++;
}

decreaseQuantity(){
  if (this.quantity>1){
    this.quantity--;
    this.addToCart(){
      this.cartService.addToCart(
        this.inputproduct
      );
    }
  }
}
addToCart()
}
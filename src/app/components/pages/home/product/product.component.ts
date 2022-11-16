import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart-service';
import { Product } from 'src/app/services/product-service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() inputProduct!: Product;
  quantity: number = 1;
  
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity>1) {
      this.quantity--;
    }
  }

  addToCart() {
    this.cartService.addToCart(this.inputProduct);
  }
}
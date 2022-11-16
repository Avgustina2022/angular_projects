import { Product } from "./product-service";

export class CartService {
    cart: Product[] = [];
    
    addToCart (product: Product){
        this.cart.push(product);
    }
  
    getCart() {
        return this.cart;
    }
}
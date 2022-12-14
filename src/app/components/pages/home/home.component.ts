import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res: any) => this.products = res);
  }
}

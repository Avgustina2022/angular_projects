import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:Product[];

  
  constructor(private productService: ProductService) { 

    this.products= productService.products;
  }

  ngOnInit(): void {

    this.productService.getProducts().subscribe((res)=>this.products=res);
  }

}

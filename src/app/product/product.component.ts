import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }

}

export class Product {
  name: string;
  description: string;
  price: number;
  weight: number;
  imgUrl: string;

  constructor(
    _name: string,
    _description: string,
    _price: number,
    _weight: number,
    _imgUrl: string
  ) { 

    this.name = _name;
    this.description = _description;
    this.price = _price;
    this.weight = _weight;
    this.imgUrl = _imgUrl;
  }
}
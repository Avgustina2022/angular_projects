import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  name:string;
  description:string;
  price:number;
  weigth:number:
  ingUrl:string;

  constructor(

    _name:string,
    _description:string,
    _price:number,
    _weight:number,
    _imgUrl:string
  ) { 

    this.name=_name;
    this.description:_description;
    this.price=_price;
    this.weight=_weight;
    this.imgUrl=_imgUrl;
  }


  export class ProductComponent{
    private product:ProductComponent[]=[];
    public getProduct():ProductComponent[]{
      
      return this.product;
    }
  }
  ngOnInit(): void {
  }

}

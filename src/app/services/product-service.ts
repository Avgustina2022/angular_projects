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

export class ProductService {
    public products: Product[] = [];

    constructor() {
        this.mockProducts();
    }

    public mockProducts() {
        this.products.push(
            new Product('Пепперони', 'Вкусная острая пицца', 450, 500, 'https://staticy.dominospizza.ru/api/medium/ProductOsg/Web/PEPERANC/NULL/NULL/RU'),
            new Product('4 сыра', 'Легендарный набор четырёх сыров прямо в вашей пицце', 430, 490, 'https://staticy.dominospizza.ru/api/medium/ProductOsg/Web/4CHEESE/NULL/NULL/RU'),
            new Product('Маргарита', 'Простая пицца с сыром моцарелла и томатами', 350, 460, 'https://staticy.dominospizza.ru/api/medium/ProductOsg/Web/_%D0%9C%D0%90%D0%A0%D0%93%D0%93%D0%A0%D0%9C/NULL/NULL/RU')
        )
    }
}
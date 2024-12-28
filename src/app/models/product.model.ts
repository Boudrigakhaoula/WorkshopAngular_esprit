export class Products {
  id: number;
  name: string;
  image: string;
  categoryId: number;
  description: string;
  price: number;
  brand: string;
  promotion: number;

  constructor( id: number,
    name: string,
    image: string,
    categoryId: number,
    description: string,
    price: number,
    brand: string,
    promotion: number ) {
    this.id = 0;
    this.name = '';
    this.image = '';
    this.categoryId = 0;
    this.description = '';
    this.price = 0;
    this.brand = '';
    this.promotion = 0;
  }
} 
export class Product {
    id: number;
    title: string;
    image: string;
    description: string;
    promotion: boolean;
    quantity: number;
    categoryId: number;
  
    constructor(
      id: number,
      title: string,
      image: string,
      description: string,
      promotion: boolean,
      quantity: number,
      categoryId: number
    ) {
      this.id = id;
      this.title = title;
      this.image = image;
      this.description = description;
      this.promotion = promotion;
      this.quantity = quantity;
      this.categoryId = categoryId;
    }
  }
import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-category-qp',
  standalone: false,
  
  templateUrl: './products-category-qp.component.html',
  styleUrl: './products-category-qp.component.css'
})
export class ProductsCategoryQPComponent implements OnInit{
  categoryId: number = 0; // Pour stocker l'ID de catégorie
  products: Products[] = []; // Pour stocker les produits
  // products : Products[] = [
  //   {
  //     "id": 1,
  //     "name": "Refrigérateur LG Inox",
  //     "image": "assets/images/refrigerateur-lg.jpg",
  //     "categoryId": 1,
  //     "description": "",
  //     "price": 2800,
  //     "brand": "LG",
  //     "promotion": 0
  //   },
  //   {
  //     "id": 2,
  //     "name": "Refrigérateur Samsung Blanc",
  //     "image": "assets/images/refrigerateur_samsung.jpg",
  //     "categoryId": 1,
  //     "description": "",
  //     "price": 2400,
  //     "brand": "Samsung",
  //     "promotion": 0
  //   },
  //   {
  //     "id": 3,
  //     "name": "Lave vaisselle Beko",
  //     "image": "assets/images/lave_vaisselle.jpg",
  //     "categoryId": 1,
  //     "description": "",
  //     "price": 1875,
  //     "brand": "BEKO",
  //     "promotion": 0
  //   },
  //   {
  //     "id": 4,
  //     "name": "Oppo Smart Phone",
  //     "image": "assets/images/oppo_smart.jpg",
  //     "categoryId": 4,
  //     "description": "",
  //     "price": 1200,
  //     "brand": "OPPO",
  //     "promotion": 0
  //   },
  //   {"id":5, 
  //     "name":"Hachoir", 
  //     "image":"assets/images/hachoir.jpg",
  //     "categoryId":2, 
  //     "description":"",
  //     "price":120,
  //     "brand":"Moulinex",
  //      "promotion":0},
  //      {"id":6,
  //       "name":"TV 50'' LG",
  //     "image":"assets/images/tv_lg.jpg",
  //     "categoryId":5,
  //      "description":"", 
  //     "price":1800,
  //     "brand":"LG",
  //     "promotion":0
  //   },
       
  // ];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProductsByIdCategory(this.categoryId).subscribe(data => {
      this.products = data; // Assurez-vous que data est de type Product[]
    });
  }

  // ngOnInit() {
  //   this.route.queryParams.subscribe(params => {
  //     this.categoryId = +params['id']; // Récupérer l'ID de catégorie à partir des paramètres de requête
  //     console.log('Category ID from query params:', this.categoryId);
  //     this.loadProducts(); // Chargez les produits en fonction de l'ID de catégorie
  //   });
  // }
  // loadProducts() {
  //   // Logique pour charger les produits en fonction de categoryId
  //   // Par exemple, filtrer une liste de produits
  //   // Remplacez ceci par votre logique de récupération de produits
  //   this.products = this.getProductsByCategoryId(this.categoryId) as Products[]; // Cast si nécessaire
  // }

  // getProductsByCategoryId(categoryId: number): Products[] {
  //   return this.products.filter(product => product.categoryId === categoryId);
  // }
 
   
}
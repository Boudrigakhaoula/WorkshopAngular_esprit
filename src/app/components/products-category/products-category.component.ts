import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FilterByCategoryIdPipe } from '../../pipes/filter-by-category-id.pipe';

@Component({
  selector: 'app-products-category',
  standalone: true,
  imports: [CommonModule, FilterByCategoryIdPipe],
  templateUrl: './products-category.component.html'
})
export class ProductsCategoryComponent implements OnInit {

  listProducts: Products[] = [
    {
      "id": 1,
      "name": "Refrigérateur LG Inox",
      "image": "assets/images/refrigerateur-lg.jpg",
      "categoryId": 1,
      "description": "",
      "price": 2800,
      "brand": "LG",
      "promotion": 0
    },
    {
      "id": 2,
      "name": "Refrigérateur Samsung Blanc",
      "image": "assets/images/refrigerateur_samsung.jpg",
      "categoryId": 1,
      "description": "",
      "price": 2400,
      "brand": "Samsung",
      "promotion": 0
    },
    {
      "id": 3,
      "name": "Lave vaisselle Beko",
      "image": "assets/images/lave_vaisselle.jpg",
      "categoryId": 1,
      "description": "",
      "price": 1875,
      "brand": "BEKO",
      "promotion": 0
    },
    {
      "id": 4,
      "name": "Oppo Smart Phone",
      "image": "assets/images/oppo_smart.jpg",
      "categoryId": 4,
      "description": "",
      "price": 1200,
      "brand": "OPPO",
      "promotion": 0
    },
    {"id":5, 
      "name":"Hachoir", 
      "image":"assets/images/hachoir.jpg",
      "categoryId":2, 
      "description":"",
      "price":120,
      "brand":"Moulinex",
       "promotion":0},
       {"id":6,
        "name":"TV 50'' LG",
      "image":"assets/images/tv_lg.jpg",
      "categoryId":5,
       "description":"", 
      "price":1800,
      "brand":"LG",
      "promotion":0
    },
       
  ];

  constructor(private route: ActivatedRoute) {}

  // ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     this.categoryId = params['id'];
  //     console.log('Category ID:', this.categoryId);
  //   });
  // }
  filteredProducts: Products[] = []; // Ajout d'une propriété pour les produits filtrés
  categoryId: number = 0;


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryId = +params['id']; // Conversion en nombre
      console.log('Category ID:', this.categoryId); // Vérifiez la valeur ici
      this.filterProductsByCategory(); // Assurez-vous que cette méthode est définie
    });
  }

  filterProductsByCategory() {
    this.filteredProducts = this.listProducts.filter(product => product.categoryId === this.categoryId);
    console.log('Filtered Products:', this.filteredProducts); // Vérifiez les produits filtrés
  }
  
}

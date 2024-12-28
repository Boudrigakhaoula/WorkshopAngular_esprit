import { Component, ViewChildren, QueryList, OnInit } from '@angular/core';
import { Categorie } from '../../models/categorie';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';
import { RouterModule } from '@angular/router';
import { DetailsCategoryComponent } from '../details-category/details-category.component';
import { CardComponent } from '../card/card.component';
import { ShortList } from '../../models/shortList';
import { ListProductsComponent } from '../list-products/list-products.component';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [CommonModule, FilterPipe, FormsModule, RouterModule, DetailsCategoryComponent, CardComponent,ListProductsComponent],
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit{
    titre: string = '';
    selectedCategory: Categorie | null = null;

  //   categories: Categorie[] = [
  //   {"id":1,"title":"Grand électroménager", 
  //     "image":"assets/images/categorie_electromenager.jpg", "description":"Appareils électroménagers de grande taille.", 
  //     "available":true},
  //     {"id":2,"title":"Petit électroménager", 
  //     "image":"assets/images/categorie_petit_electromenager.jpg", "description":"Appareils électroménagers de petite taille.", 
  //     "available":true},
  //     {"id":3,"title":"Produits informatiques", 
  //     "image":"assets/images/categorie_produits_informatiques.jpg", "description":"Ordinateurs, accessoires et plus.", 
  //     "available":true},
  //     {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg", 
  //     "description":"Téléphones intelligents de dernière génération.", "available":true},
  //     {"id":5,"title":"TV, images et son", 
  //     "image":"assets/images/categorie_tv_image_son.jpg", "description":"Téléviseurs et systèmes audio.", 
  //     "available":true},
  //     {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg", 
  //     "description":"Produits de nettoyage pour véhicules.","available":false},
  // ];
  // categories: Categorie[] = [
  //   new Categorie(1, 'Grand Électroménager', 'assets/images/categorie_electromenager.jpg', 'Appareils électroménagers de grande taille.', true),
  //   new Categorie(2, 'Petit Électroménager', 'assets/images/categorie_petit_electromenager.jpg', 'Appareils électroménagers de petite taille.', true),
  //   new Categorie(3, 'Produits informatiques', 'assets/images/categorie_produits_informatiques.jpg', 'Ordinateurs, accessoires et plus.', true),
  //   new Categorie(4, 'Smart Phones', 'assets/images/categorie_smartPhone.jpg', 'Téléphones intelligents de dernière génération.', true),
  //   new Categorie(5, 'TV, images et son', 'assets/images/categorie_tv_image_son.jpg', 'Téléviseurs et systèmes audio.', true),
  //   new Categorie(6, 'Produits voiture', 'assets/images/produits_nettoyages.jpg', 'Produits de nettoyage pour véhicules.', false),
  // ];

  categories: Categorie[] = [];
  shortList: ShortList[] = []; // Propriété shortList initialement vide
  constructor(private categoryService: CategoryService) {}


  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAllCategoriesFromBackend().subscribe(data => {
      this.categories = data;
    });
  }

  deleteCategory(category: Categorie): void {
    this.categoryService.deleteCategoryFromBackend(category).subscribe(() => {
      this.loadCategories(); // Recharge la liste après suppression
    });
  }

  @ViewChildren(CardComponent) cardComponents!: QueryList<CardComponent>;

  addToShortList(idElement: number) {
    const idUser = 1; // Remplacez par la valeur de l'utilisateur souhaitée
    const typeElement = 'Categorie'; // Définissez le type d'élément

    const exists = this.shortList.some(item => item.idElement === idElement && item.idUser === idUser);

    if (!exists) {
      const newShortListItem = new ShortList(this.shortList.length + 1, idUser, idElement, typeElement);
      this.shortList.push(newShortListItem);
      console.log('Catégorie ajoutée à la shortList:', newShortListItem);
    } else {
      console.log('Cette catégorie est déjà dans la shortList pour cet utilisateur.');
    }
  }
  showDescription(description: string) {
    alert(description); // Affiche une alerte avec la description
}
}

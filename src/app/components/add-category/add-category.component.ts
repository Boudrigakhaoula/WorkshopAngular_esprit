import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Categorie } from '../../models/categorie';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent  {
  newCategory: Categorie = new Categorie(0, '', '', '', true); // Initialiser l'ID à 0 ou une autre valeur par défaut

  constructor(private categoryService: CategoryService, private router: Router) {}

  addCategory() {
    this.categoryService.addCategory(this.newCategory).subscribe({
      next: () => {
        alert('Catégorie ajoutée avec succès'); // Afficher l'alerte de succès
        this.router.navigate(['/']); // Rediriger vers la page d'accueil
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout de la catégorie:', err); // Afficher l'erreur dans la console
        alert('Erreur lors de l\'ajout de la catégorie.'); // Afficher un message d'erreur
      }
    });
  }

  resetForm() {
    this.newCategory = new Categorie(0, '', '', '', true); // Réinitialiser les champs
  }
}
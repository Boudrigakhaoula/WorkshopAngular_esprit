import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie'; 

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrlCat: string = "http://localhost:3000/categories";

  constructor(private http: HttpClient) { }

  // Récupération de la liste des catégories
  getAllCategoriesFromBackend(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.apiUrlCat);
  }

  // Suppression d'une catégorie
  deleteCategoryFromBackend(category: Categorie): Observable<Categorie> {
    return this.http.delete<Categorie>(`${this.apiUrlCat}/${category.id}`);
  }
    // Ajout d'une catégorie
   // Ajout d'une catégorie
   addCategory(category: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.apiUrlCat, category);
  }
      // Récupérer une catégorie par ID
  getCategoryById(id: number): Observable<Categorie> {
    return this.http.get<Categorie>(`${this.apiUrlCat}/${id}`);
  }
    // Mise à jour d'une catégorie
    updateCategory(category: Categorie): Observable<Categorie> {
      return this.http.put<Categorie>(`${this.apiUrlCat}/${category.id}`, category);
    }
}

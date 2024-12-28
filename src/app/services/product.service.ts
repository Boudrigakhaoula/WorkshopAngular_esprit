import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrlProduct: string = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }

  // Méthode pour ajouter un produit
  addProducts(p: Products): Observable<Products> {
    return this.http.post<Products>(this.apiUrlProduct, p);
  }

  // Méthode pour obtenir les produits par ID de catégorie
  getProductsByIdCategory(idC: number): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiUrlProduct}?categoryId=${idC}`);
  }
}

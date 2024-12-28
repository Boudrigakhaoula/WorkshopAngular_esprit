import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Products } from '../../models/product.model';
//import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-form-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {
 // product: Products = new Products();
 //products: Product[] = [];
 newProduct: Products = new Products(0,'', '', 0,'',0,'', 0); // Assurez-vous que les types correspondent

 constructor(private productService: ProductService) {}

 addProducts() {
   this.productService.addProducts(this.newProduct).subscribe(() => {
     alert('Produit ajouté avec succès');
     this.resetForm();
   });
 }

 resetForm() {
   this.newProduct = new Products(0,'', '', 0,'',0,'', 0);// Réinitialiser les champs
 }
  // addProduct() {
  //   this.products.push({ ...this.product });
  //   console.log('Produit ajouté:', this.product);
  //   this.product = new Product();
  // }



}

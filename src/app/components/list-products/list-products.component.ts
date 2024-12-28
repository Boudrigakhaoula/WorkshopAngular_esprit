import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/product.model';
import { Product } from '../../models/product';
import { ShortList } from '../../models/shortList';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = [
    new Product(1, 'Cuisinière', 'assets/images/grand_electromenagers/cuisiniere.png', '699 dt', false, 50, 1),
    new Product(2, 'Réfrigérateur', 'assets/images/grand_electromenagers/refrigerateur.jpg', '1500 dt', false, 20, 1),
    new Product(3, 'Robot Pétrin', 'assets/images/petit_electromenager/robot_petrin.jpg', '430 dt', false, 150, 2),
    new Product(4, 'Fer à repasser', 'assets/images/petit_electromenager/fer_a_repasser.jpg', '130 dt', false, 100, 2),
    new Product(5, 'Oppo', 'assets/images/smart_phones/Oppo.jpg', '920 dt', false, 10, 4),
    new Product(6, 'TV Téléfunkun', 'assets/images/tv_images_son/tv1.jpg', '845 dt', false, 50, 5),
  ];

  shortList: ShortList[] = []; // Propriété shortList initialement vide
  products: Products[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProductsByIdCategory(2).subscribe(data => { 
        this.products = data;
    });
  }
  addToShortList(idElement: number) {
    const idUser = 1; // Remplacez par la valeur de l'utilisateur souhaitée
    const typeElement = 'product'; // Définissez le type d'élément

    const exists = this.shortList.some(item => item.idElement === idElement && item.idUser === idUser);

    if (!exists) {
      const newShortListItem = new ShortList(this.shortList.length + 1, idUser, idElement, typeElement);
      this.shortList.push(newShortListItem);
      console.log('Produit ajouté à la shortList:', newShortListItem);
    } else {
      console.log('Ce produit est déjà dans la shortList pour cet utilisateur.');
    }
  }
}

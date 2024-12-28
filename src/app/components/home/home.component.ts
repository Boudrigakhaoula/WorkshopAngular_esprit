import { Component } from '@angular/core';
import { ListCategoriesComponent } from '../list-categories/list-categories.component';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListCategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

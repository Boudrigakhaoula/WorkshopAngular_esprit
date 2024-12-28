import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ProductsCategoryComponent } from './components/products-category/products-category.component';
import { ProductsCategoryQPComponent } from './components/products-category-qp/products-category-qp.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ListUserComponent } from './components/user-list/user-list.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-product', component: FormProductComponent },
  { path: 'apropos', loadChildren: () => import('./modules/apropos/apropos.module').then(m => m.AproposModule) },
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) },
  { path: 'products', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule) },
  { path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'products-category/:id', component: ProductsCategoryComponent },
  { path: 'products-category-q-p', component: ProductsCategoryQPComponent },
  { path: "list_user", component: ListUserComponent },
  { path: 'categories', component: ListCategoriesComponent },
  { path: 'add-category', component: AddCategoryComponent },
    // Route pour modifier une catégorie
  { path: 'add-category/:id', component: AddCategoryComponent } ,
  //{ path: 'add-product', component: FormProductComponent }, // Route pour ajouter un produit
  { path: 'products', component: ListProductsComponent }, // Route pour afficher les produits
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

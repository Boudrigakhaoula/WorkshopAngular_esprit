import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { ProductModule } from './modules/product/product.module';
import { ContactModule } from './modules/contact/contact.module';
import { ProfileModule } from './modules/profile/profile.module';
import { AproposModule } from './modules/apropos/apropos.module';
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightDirective } from './highlight.directive';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ProductsCategoryComponent } from './components/products-category/products-category.component';
import { RouterModule } from '@angular/router';
import { ProductsCategoryQPComponent } from './components/products-category-qp/products-category-qp.component';
import { DetailsCategoryComponent } from './components/details-category/details-category.component';
import { CardComponent } from './components/card/card.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddCategoryComponent } from './components/add-category/add-category.component';



@NgModule({
  declarations: [
    AppComponent,
   NotFoundPageComponent,
     ProductsCategoryQPComponent,
     
   
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ProductModule,
    ContactModule,
    ProfileModule,
    AproposModule,
    HeaderComponent,
    FilterPipe,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    HighlightDirective,
    ProductsCategoryComponent,
    DetailsCategoryComponent,
    CardComponent,
    ListProductsComponent,
    AddCategoryComponent,
    HttpClientModule  ,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
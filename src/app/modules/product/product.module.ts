import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { FormProductComponent } from '../../components/form-product/form-product.component';

@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    FormProductComponent
  ]
})
export class ProductModule { }

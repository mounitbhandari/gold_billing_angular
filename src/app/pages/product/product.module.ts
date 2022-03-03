import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    
  ]
})
export class ProductModule { }

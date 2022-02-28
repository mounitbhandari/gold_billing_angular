import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    OwnerComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MatMenuModule
  ]
})
export class OwnerModule { }

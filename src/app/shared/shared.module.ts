import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuItemComponent} from './menu-item/menu-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MenuItemComponent
  ],
  exports:[
    MenuItemComponent
  ]
})
export class SharedModule { }

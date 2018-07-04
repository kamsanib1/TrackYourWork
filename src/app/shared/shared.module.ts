import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuItemComponent} from './menu-item/menu-item.component';
import { FormsModule } from '@angular/forms';
import { EditableComponent } from './editable/editable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MenuItemComponent,
    EditableComponent
  ],
  exports:[
    MenuItemComponent,
    EditableComponent
  ]
})
export class SharedModule { }

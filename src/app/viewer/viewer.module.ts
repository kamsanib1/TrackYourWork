import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterViewComponent } from './filter-view/filter-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleDropdownComponent } from './simple-dropdown/simple-dropdown.component';
import { DateDropdownComponent } from './date-dropdown/date-dropdown.component';
import { ViewerComponent } from './viewer/viewer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      { path:'viewer', component:ViewerComponent }
    ])
  ],
  declarations: [FilterViewComponent, SimpleDropdownComponent, DateDropdownComponent, ViewerComponent],
  exports:[
    FilterViewComponent,
    SimpleDropdownComponent,
    DateDropdownComponent
  ]
})
export class ViewerModule { }

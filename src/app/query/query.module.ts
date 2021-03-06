import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryComponent } from './query/query.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'query',component:QueryComponent}
    ])
  ],
  declarations: [QueryComponent]
})
export class QueryModule { }

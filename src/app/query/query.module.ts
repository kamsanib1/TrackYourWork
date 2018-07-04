import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryComponent } from './query/query.component';
import { RouterModule } from '@angular/router';
import { QueryDetailComponent } from './query-detail/query-detail.component';
import { QueryDisplayComponent } from './query-display/query-display.component';
import { RedirectComponent } from './redirect/redirect.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'query',component:QueryComponent}
    ])
  ],
  declarations: [
    QueryComponent,
    QueryDetailComponent,
    QueryDisplayComponent,
    RedirectComponent
  ]
})
export class QueryModule { }

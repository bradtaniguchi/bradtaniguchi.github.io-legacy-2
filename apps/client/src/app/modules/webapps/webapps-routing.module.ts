import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {WebappsComponent} from './webapps.component';

const routes: Routes = [
  {
    path: ':id',
    component: WebappsComponent,
  },
  {
    path: '**',
    component: WebappsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebappsRoutingModule {}


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebappsComponent } from './webapps.component';

const routes: Routes = [
  {
    path: ':slug',
    component: WebappsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebappsRoutingModule {}

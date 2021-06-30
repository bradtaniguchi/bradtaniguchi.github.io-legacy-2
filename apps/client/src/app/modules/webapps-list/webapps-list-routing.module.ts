import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebappsListComponent } from './webapps-list.component';

const routes: Routes = [
  {
    path: '',
    component: WebappsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebappsListRoutingModule {}

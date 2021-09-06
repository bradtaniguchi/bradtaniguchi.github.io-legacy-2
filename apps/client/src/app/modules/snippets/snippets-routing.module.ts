import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnippetsComponent } from './snippets.component';

const routes: Routes = [
  {
    path: ':slug',
    component: SnippetsComponent,
  },
  {
    path: ':id',
    component: SnippetsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnippetsRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnippetsListComponent } from './snippets-list.component';

const routes: Routes = [
  {
    path: '',
    component: SnippetsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnippetsListRoutingModule {}

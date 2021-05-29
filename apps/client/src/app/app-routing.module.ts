import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([], {
      initialNavigation: 'enabled',
      paramsInheritanceStrategy: 'always',
    }),
  ],
})
export class AppRoutingModule {}

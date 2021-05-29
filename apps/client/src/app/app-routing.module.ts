import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'blog',
          loadChildren: () =>
            import('./blog/blog.module').then((m) => m.BlogModule),
        },
      ],
      {
        initialNavigation: 'enabled',
        paramsInheritanceStrategy: 'always',
      }
    ),
  ],
})
export class AppRoutingModule {}

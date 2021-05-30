import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'blog',
          loadChildren: () =>
            import('./modules/blog/blog.module').then((m) => m.BlogModule),
        },
        {
          path: 'snippets',
          loadChildren: () =>
            import('./modules/snippets/snippets.module').then(
              (m) => m.SnippetsModule
            ),
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

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'about',
          pathMatch: 'full',
          loadChildren: () =>
            import('./modules/about/about.module').then((m) => m.AboutModule),
        },
        {
          path: 'projects',
          pathMatch: 'full',
          loadChildren: () =>
            import('./modules/projects-list/projects-list.module').then(
              (m) => m.ProjectsListModule
            ),
        },
        {
          path: 'projects',
          loadChildren: () =>
            import('./modules/projects/projects.module').then(
              (m) => m.ProjectsModule
            ),
        },
        // scully based routes
        {
          path: 'blog',
          pathMatch: 'full',
          loadChildren: () =>
            import('./modules/blog-list/blog-list.module').then(
              (m) => m.BlogListModule
            ),
        },
        {
          path: 'blog',
          loadChildren: () =>
            import('./modules/blog/blog.module').then((m) => m.BlogModule),
        },
        {
          path: 'snippets',
          pathMatch: 'full',
          loadChildren: () =>
            import('./modules/snippets-list/snippets-list.module').then(
              (m) => m.SnippetsListModule
            ),
        },
        {
          path: 'snippets',
          loadChildren: () =>
            import('./modules/snippets/snippets.module').then(
              (m) => m.SnippetsModule
            ),
        },
        {
          path: '',
          pathMatch: 'full',
          loadChildren: () =>
            import('./modules/home/home.module').then((m) => m.HomeModule),
        },
        { path: '**', redirectTo: '/' },
      ],
      {
        initialNavigation: 'enabled',
        paramsInheritanceStrategy: 'always',
      }
    ),
  ],
})
export class AppRoutingModule {}

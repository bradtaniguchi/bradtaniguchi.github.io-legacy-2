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
          path: 'home',
          pathMatch: 'full',
          loadChildren: () =>
            import('./modules/home/home.module').then((m) => m.HomeModule),
        },
        {
          path: 'projects',
          pathMatch: 'full',
          loadChildren: () =>
            import('./modules/projects/projects.module').then(
              (m) => m.ProjectsModule
            ),
        },
        // scully based routes
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
        {
          path: 'apps',
          loadChildren: () =>
            import('./modules/webapps/webapps.module').then(
              (m) => m.WebappsModule
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

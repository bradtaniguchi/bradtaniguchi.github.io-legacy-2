import { ScullyConfig, RouteConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: './apps/client/src',
  projectName: 'client',
  distFolder: './dist/apps/client',
  outDir: './dist/static',
  staticPort: 4201,
  appPort: 4200,
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './static/blog',
      },
    },
    '/snippets/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './static/snippets',
      },
    },
    '/projects/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './static/projects',
      },
    },
  },
  /**
   * Extra routes to render automatically via scully. For SEO
   */
  extraRoutes: [
    '/about/',
    // static list pages
    '/blog/',
    '/snippets/',
    '/projects/',
  ],
};

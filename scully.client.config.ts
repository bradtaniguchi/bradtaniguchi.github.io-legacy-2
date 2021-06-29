import { ScullyConfig, RouteConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: './apps/client/src',
  projectName: 'client',
  distFolder: './dist/apps/client',
  outDir: './dist/static',
  staticPort: 4201,
  appPort: 4200,
  routes: {
    '/apps/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './static/web-apps',
      },
    },
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
  },
  /**
   * Extra routes to render automatically via scully. For SEO
   */
  extraRoutes: ['/blog/'],
};

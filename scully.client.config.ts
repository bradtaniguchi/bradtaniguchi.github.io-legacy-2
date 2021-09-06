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
        folder: './static/webapps',
      },
    },
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './static/blog',
      },
    },
    '/snippets/:id': {
      type: 'json',
      id: {
        url: 'https://api.github.com/users/bradtaniguchi/gists',
        property: 'id',
        headers: {
          expectedContentType: 'application/vnd.github.v3+json',
          'User-Agent': 'request',
        },
        // TODO: see if its possible to leverage this
        // to get more meta-data out of the JSON.
        // otherwise its kinda useless.
        // postRenderers: [
        //   (data: unknown) => {
        //     console.log('test', data);
        //     return data;
        //   },
        // ],
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
    '/apps/',
  ],
};

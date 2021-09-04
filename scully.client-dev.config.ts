import { ScullyConfig, RouteConfig } from '@scullyio/scully';
import { config as baseConfig } from './scully.client-dev.config';

export const config: ScullyConfig = {
  ...baseConfig,
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './static/blog',
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

import * as dotenv from 'dotenv';
dotenv.config();
import { ScullyConfig } from '@scullyio/scully';

if (!process.env.GIST_GITHUB_TOKEN) {
  throw new Error(
    'No GIST_GITHUB_TOKEN environment variable found, can not load snippets'
  );
}
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
    '/snippets/:id': {
      type: 'json',
      id: {
        url: 'https://api.github.com/users/bradtaniguchi/gists',
        property: 'id',
        headers: {
          expectedContentType: 'application/vnd.github.v3+json',
          'User-Agent': 'request',
          Authoriztion: `bradtaniguchi ${process.env.GIST_GITHUB_TOKEN}`,
        },
        resultsHandler: (response: Array<any>) =>
          response.filter((res) => res.public),
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

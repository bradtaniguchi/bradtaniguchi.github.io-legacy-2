import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  Tree,
} from '@nrwl/devkit';
import { DateTime } from 'luxon';
import { Schema } from './schema';

export default async function (host: Tree, schema: Schema) {
  const normalizedType = (() => {
    switch (schema.type) {
      case 'project':
      case 'projects':
        return 'projects';
      case 'snippet':
      case 'snippets':
        return 'snippets';
      case 'webapp':
      case 'webapps':
        return 'webapps';
      default:
        return schema.type;
    }
  })();
  generateFiles(
    host,
    joinPathFragments(__dirname, './files'),
    `./static/${normalizedType}`,

    // the variables to be substituted in the template
    {
      title: schema.title,
      normalizedTitle: names(schema.title).fileName,
      published: !!schema.published,
      date: `${DateTime.now().toISODate()}T00:00:00.000Z`,
    }
  );

  await formatFiles(host);
}

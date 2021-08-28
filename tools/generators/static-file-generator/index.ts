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
  generateFiles(
    host,
    joinPathFragments(__dirname, './files'),
    `./static/${schema.type}`,

    // the variables to be substituted in the template
    {
      title:
        schema.type === 'blog'
          ? `${DateTime.now().toISODate()}-blog`
          : schema.title,
      normalizedTitle:
        schema.type === 'blog'
          ? `${DateTime.now().toISODate()}-blog`
          : names(schema.title).fileName,
      published: !!schema.published,
      date: `${DateTime.now().toISODate()}T00:00:00.000Z`,
    }
  );

  await formatFiles(host);
}

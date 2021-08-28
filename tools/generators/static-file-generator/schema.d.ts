export interface Schema {
  /**
   * The type of asset to create
   */
  type: 'blog' | 'projects' | 'snippets' | 'webapps';
  /**
   * The title of the asset to create
   */
  title: string;
  /**
   * If the article is to be created published.
   */
  published?: boolean;
}

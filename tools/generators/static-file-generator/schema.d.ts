export interface Schema {
  /**
   * The type of asset to create
   */
  type:
    | 'blog'
    | 'projects'
    | 'project'
    | 'snippets'
    | 'snippet'
    | 'webapps'
    | 'webapp';
  /**
   * The title of the asset to create
   */
  title: string;
  /**
   * If the article is to be created published.
   */
  published?: boolean;
}

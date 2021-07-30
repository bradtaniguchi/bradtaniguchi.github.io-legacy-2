/**
 * Configuration settings for the list-common component.
 * This is usually provided at the app-level for default settings for this component,
 * but could be changed at lower levels.
 */
export interface ListCommonConfig {
  /**
   * If we are to hide the search field.
   */
  hideSearch?: boolean;
  /**
   * If we are to hide the sort-by field.
   */
  hideSortBy?: boolean;
  /**
   * If we are to hide the tag-filtering field.
   * **note** not available yet
   */
  hideTagFilter?: boolean;
}

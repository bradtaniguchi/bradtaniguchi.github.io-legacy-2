export type Theme = 'dark' | 'light';

export interface ThemeState {
  /**
   * The currently selected theme
   */
  theme?: Theme;
}

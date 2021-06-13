export type Theme = 'light' | 'dark' | 'dark_dimmed';

export interface ThemeState {
  /**
   * The currently selected theme
   */
  theme?: Theme;
}

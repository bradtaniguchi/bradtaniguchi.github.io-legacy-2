import { Inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { LOCAL_FORAGE } from '../../core/local-forage/local-forage';
import { Theme, ThemeState } from './theme.state';

@Injectable()
export class ThemeStoreService extends ComponentStore<ThemeState> {
  private static THEME_STORAGE_KEY = 'bt-app-theme';
  public static THEMES: Theme[] = ['light', 'dark'];
  /**
   * The theme that is currently selected within the state.
   */
  public theme$ = this.select((state) => state.theme);

  constructor(@Inject(LOCAL_FORAGE) private localforage: LocalForage) {
    super({});

    // get and set the default theme if available
    this.localforage
      .getItem(ThemeStoreService.THEME_STORAGE_KEY)
      .then((theme: Theme | unknown) =>
        this.isTheme(theme) ? this.setTheme(theme) : this.setTheme('dark')
      )
      .catch((err) => console.error(err));
  }
  /**
   * Directly set the theme of the app.
   */
  private readonly setTheme = this.updater((state, theme: Theme) => ({
    ...state,
    theme,
  }));
  /**
   * Set the theme into localStorage
   */
  private readonly setThemeInLocalStorage$ = this.effect(
    (theme$: Observable<Theme>) =>
      theme$.pipe(
        switchMap((theme) =>
          this.localforage.setItem(ThemeStoreService.THEME_STORAGE_KEY, theme)
        )
      )
  );

  private isTheme(theme: unknown): theme is Theme {
    return ThemeStoreService.THEMES.includes(theme as Theme);
  }

  /**
   * Changes the theme from dark to light mode.
   *
   * **note** this will be removed if we end up supporting more themes
   */
  public toggleTheme() {
    const themeToSet$ = this.theme$.pipe(
      // **note** this may change, if there are more themes in the future
      map((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark')),
      take(1)
    );
    this.setTheme(themeToSet$);
    this.setThemeInLocalStorage$(themeToSet$);
  }
}

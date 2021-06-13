import { Inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { LOCAL_FORAGE } from '../../core/local-forage/local-forage';
import { Theme, ThemeState } from './theme.state';

@Injectable()
export class ThemeStoreService extends ComponentStore<ThemeState> {
  private static THEME_STORAGE_KEY = 'bt-app-theme';
  public static THEMES: Theme[] = ['dark', 'dark_dimmed', 'light'];
  /**
   * The theme that is currently selected within the state.
   */
  public theme$ = this.select((state) => state.theme);

  constructor(@Inject(LOCAL_FORAGE) private localforage: LocalForage) {
    super({ theme: 'dark' });

    // get and set the default theme if available
    this.localforage
      .getItem(ThemeStoreService.THEME_STORAGE_KEY)
      .then((theme: Theme | unknown) =>
        this.isTheme(theme) ? this.setTheme(theme) : this.setTheme('dark')
      )
      .catch((err: unknown) => console.error(err));
    this.state$.subscribe(console.log);
  }
  /**
   * Directly set the theme of the app.
   */
  public readonly setTheme = this.updater((state, theme: Theme) => ({
    ...state,
    theme,
  }));
  /**
   * Set the theme into localStorage
   */
  public readonly setThemeInLocalStorage$ = this.effect(
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
   * Toggles all the themes in the following order:
   * - dark
   * - dark-dimmed
   * - light
   *
   */
  public toggleTheme() {
    const nextTheme$ = this.theme$.pipe(
      map((theme) => this.getNextTheme(theme, ThemeStoreService.THEMES)),
      take(1)
    );
    this.setTheme(nextTheme$);
    this.setThemeInLocalStorage$(nextTheme$);
  }

  private getNextTheme(theme: Theme, themes: Theme[]): Theme {
    const nextIndex = themes.indexOf(theme) + 1;
    return themes[nextIndex % ThemeStoreService.THEMES.length];
  }
}

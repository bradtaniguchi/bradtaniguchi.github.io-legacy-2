import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SidenavStoreService } from './core/sidenav/sidenav.store.service';
import { Theme } from './store/theme/theme.state';
import { ThemeStoreService } from './store/theme/theme.store.service';

@Component({
  selector: 'bt-root',
  templateUrl: './app.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SidenavStoreService, ThemeStoreService],
})
export class AppComponent {
  /**
   * The overall app-level theme selected
   */
  public theme$ = this.themeStore.theme$;
  /**
   * There are only 2 data colors available,
   * light and dark.
   */
  public dataColorMode$: Observable<'light' | 'dark'> = this.theme$.pipe(
    map((theme) => (theme === 'light' ? 'light' : 'dark'))
  );
  /**
   * The data attribute used for both the dark and dark_dimmed themes
   */
  public dataDarkTheme$: Observable<
    'dark' | 'dark_dimmed' | undefined
  > = this.theme$.pipe(
    map((theme) =>
      (['dark', 'dark_dimmed'] as Array<Theme>).includes(theme)
        ? (theme as 'dark' | 'dark_dimmed')
        : undefined
    )
  );
  /**
   * The data attribute used for the light theme or set to undefined
   */
  public dataLightTheme$: Observable<'light' | undefined> = this.theme$.pipe(
    map((theme) => (theme === 'light' ? 'light' : undefined))
  );

  constructor(private themeStore: ThemeStoreService) {}
}

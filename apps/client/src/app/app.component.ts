import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { ClientLoggerService } from './core/client-logger/client-logger.service';
import { Theme } from './store/theme/theme.state';
import { ThemeStoreService } from './store/theme/theme.store.service';

// eslint-disable-next-line no-var
declare var gtag: unknown;

@Component({
  selector: 'bt-root',
  templateUrl: './app.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ThemeStoreService],
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
  public dataDarkTheme$: Observable<'dark' | 'dark_dimmed' | undefined> =
    this.theme$.pipe(
      map((theme) =>
        theme && (['dark', 'dark_dimmed'] as Array<Theme>).includes(theme)
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

  constructor(
    private themeStore: ThemeStoreService,
    private router: Router,
    private logger: ClientLoggerService,
    private title: Title
  ) {
    if (environment.gtagCode) {
      this.logger.debug('gtag code provided, tracking page views');
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe((event) => {
          if (!gtag || typeof gtag !== 'function') {
            this.logger.error('missing gtag', { gtag });
            return;
          }

          this.logger.debug('page path', { event, router: this.router });
          gtag('config', environment.gtagCode, {
            page_path: (event as NavigationEnd).urlAfterRedirects,
            page_location: (event as NavigationEnd).urlAfterRedirects,
            page_title: (event as NavigationEnd).urlAfterRedirects,
          });
        });
    }
  }
}

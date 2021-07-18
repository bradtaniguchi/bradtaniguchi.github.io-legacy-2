import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ThemeStoreService } from '../../store/theme/theme.store.service';

@Component({
  selector: 'bt-header',
  templateUrl: './header.component.html',
  styles: [
    `
      @import '@primer/css/header/index.scss';
      @import '@primer/css/buttons/index.scss';
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @HostBinding('class.Header') Header = true;
  public isSmallScreen$: Observable<boolean>;
  /**
   * If the mobile menu is opened
   */
  public mobileMenuOpened = false;
  constructor(
    media: MediaObserver,

    private themeStore: ThemeStoreService
  ) {
    this.isSmallScreen$ = media
      .asObservable()
      .pipe(map(([change]) => ['xs', 'sm'].includes(change.mqAlias)));

    this.isSmallScreen$
      .pipe(filter((_) => !_))
      .subscribe(() => (this.mobileMenuOpened = false));
  }

  /**
   * Toggle the theme from dark to light mode
   */
  public toggleTheme() {
    // TODO: remove, update
    this.themeStore.toggleTheme();
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ThemeStoreService } from '../../store/theme/theme.store.service';
import { SidenavStoreService } from '../sidenav/sidenav.store.service';

@Component({
  selector: 'bt-header',
  templateUrl: './header.component.html',
  styles: [
    `
      @import '@primer/css/header/index.scss';
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @HostBinding('class.Header') Header = true;
  public isSmallScreen$: Observable<boolean>;

  constructor(
    media: MediaObserver,
    private sidenavStore: SidenavStoreService,
    private themeStore: ThemeStoreService
  ) {
    this.isSmallScreen$ = media
      .asObservable()
      .pipe(map(([change]) => ['xs', 'sm'].includes(change.mqAlias)));
  }

  /**
   * Toggle the mobile navigation menu.
   */
  public toggleSidenav() {
    this.sidenavStore.toggleSidenav();
  }

  /**
   * Toggle the theme from dark to light mode
   */
  public toggleTheme() {
    // TODO: remove, update
    this.themeStore.toggleTheme();
  }
}

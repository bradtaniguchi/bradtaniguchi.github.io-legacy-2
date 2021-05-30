import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidenavStoreService } from './core/sidenav/sidenav.store.service';

@Component({
  selector: 'bt-root',
  templateUrl: './app.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SidenavStoreService],
})
export class AppComponent {}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bt-root',
  templateUrl: './app.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}

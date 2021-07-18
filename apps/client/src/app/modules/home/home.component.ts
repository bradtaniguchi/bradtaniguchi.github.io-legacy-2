import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bt-home',
  templateUrl: './home.component.html',
  styles: [
    `
      @import '@primer/css/box/index.scss';
    `,
    `
      .link-box-text {
        float: left;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}

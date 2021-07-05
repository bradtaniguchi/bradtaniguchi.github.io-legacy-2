import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bt-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .link-box-text {
        float: left;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}

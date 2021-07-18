import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bt-about',
  templateUrl: './about.component.html',
  styles: [
    `
      @import '@primer/css/box/index.scss';
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  // TODO: get stats from github service, and build stats
  public buildStats = 'TBD...';
}

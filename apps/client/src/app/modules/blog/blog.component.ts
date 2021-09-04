import { Component, ViewEncapsulation } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'bt-blog',
  templateUrl: './blog.component.html',
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent {
  public current$ = this.routes.getCurrent();
  constructor(private routes: ScullyRoutesService) {}
}

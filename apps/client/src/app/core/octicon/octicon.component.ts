import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as octicons from '@primer/octicons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'octicon',
  template: '<div [innerHtml]="svg"></div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OcticonComponent implements OnInit {
  @HostBinding('role') role = 'img';
  @HostBinding('aria-hidden') ariaHidden = true;
  @Input() octicon?: string;
  @Input() height?: number;
  @Input() width?: number;

  public svg?: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (!this.octicon) return;
    const octicon = octicons[this.octicon];
    if (!octicon) return;
    if (this.octicon)
      this.svg = this.sanitizer.bypassSecurityTrustHtml(
        octicon.toSVG({
          height: this.height || 16,
          width: this.width || 16,
        })
      );
  }
}

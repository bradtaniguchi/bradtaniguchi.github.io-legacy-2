import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as octicons from '@primer/octicons';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[octicon]',
})
export class OcticonDirective implements OnInit {
  @Input() octicon?: string;

  constructor(
    private sanitizer: DomSanitizer,
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {
    console.log('WTF');
  }

  ngOnInit() {
    if (!this.octicon) return;
    const octicon = octicons[this.octicon];
    console.log('octicon', octicon);
    if (!octicon) return;
    if (this.octicon) {
      (this.elementRef
        .nativeElement as HTMLElement).innerHTML = this.sanitizer.bypassSecurityTrustHtml(
        octicon.toSVG()
      ) as string;

      console.log('test with native el', this.elementRef.nativeElement);
      this.cdr.detectChanges();
    }
  }
}

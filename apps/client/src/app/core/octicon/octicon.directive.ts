import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as octicons from '@primer/octicons';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[octicon]',
})
export class OcticonDirective implements OnInit {
  @Input() octicon?: string;

  constructor(private sanitizer: DomSanitizer, private elementRef: ElementRef) {
    console.log('WTF');
  }

  ngOnInit() {
    if (!this.octicon) return;
    const octicon = octicons[this.octicon];
    if (!octicon) return;
    if (this.octicon) {
      this.elementRef.nativeElement.innerHtml = this.sanitizer.bypassSecurityTrustHtml(
        octicon.toSVG()
      );
    }
  }
}

// @Input()
// svg?: string;

// constructor(
//   private _elementRef: ElementRef,
// ) {}

// ngOnChanges(changes: SimpleChanges) {
//   if (changes.svg) {
//     this._elementRef.nativeElement.innerHTML = '';

//     if (this.svg) {
//       this._elementRef.nativeElement.innerHTML = this.svg;
//     }
//   }
// }

// newSteps=[];
// constructor(private sanitizer: DomSanitizer) { }

// ngOnInit() {
//     for (let i = 0; i < this.steps.length; i++) {
//       this.newSteps.push(this.sanitizer.bypassSecurityTrustHtml(this.steps[i].icon));
//     }
// }

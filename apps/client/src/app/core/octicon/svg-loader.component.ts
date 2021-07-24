import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'svg-loader',
  template: '<div [innerHtml]="svg$ | async"></div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgLoaderComponent implements OnInit {
  @HostBinding('role') role = 'img';
  @HostBinding('aria-hidden') ariaHidden = true;
  @Input() path?: string;

  public svg$?: Observable<SafeHtml>;

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {}

  ngOnInit() {
    if (!this.path) return;
    this.svg$ = this.http
      .get(this.path, {
        headers: new HttpHeaders().set('Accept', 'image/svg+xml'),
        responseType: 'text',
      })
      .pipe(
        take(1),
        map((svg) => this.sanitizer.bypassSecurityTrustHtml(svg))
      );
  }
}

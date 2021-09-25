import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {
  ClientLoggerMethods,
  ClientLoggerService,
} from './client-logger/client-logger.service';

// eslint-disable-next-line no-var, @typescript-eslint/no-explicit-any
declare var gtag: any;

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private logger: ClientLoggerService
  ) {
    const scriptElement = this.document.createElement('script');
    scriptElement.src = `https://www.googletagmanager.com/gtag/js?id=${environment.gtagCode}`;
    scriptElement.async = true;
    this.document.head.appendChild(scriptElement);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as Window & any;
    win.dataLayer = win.dataLayer || [];

    win.gtag = () => {
      // eslint-disable-next-line prefer-rest-params
      win.dataLayer.push(arguments);
    };
    gtag('js', new Date());
    gtag('config', environment.gtagCode);

    this.logger.debug('Loaded analytics');

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) =>
        this.trackAnalyticRouteEvent(event as NavigationEnd)
      );
  }

  private trackAnalyticRouteEvent(event: NavigationEnd) {
    if (!gtag) {
      return;
    }
    gtag('config', environment.gtagCode, {
      page_path: event.urlAfterRedirects,
    });
  }
}

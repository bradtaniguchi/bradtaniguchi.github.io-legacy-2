/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';
import localforage from 'localforage';
import { environment } from '../environments/environment';
import { CODEWARS_API_USER_INJECTION_TOKEN } from './api/codewars/codewars-api-user-injection-token';
import { FREE_CODE_CAMP_USER_INJECTION_TOKEN } from './api/free-code-camp/free-code-camp-user.injection-token';
import { GITHUB_API_REPO_INJECTION_TOKEN } from './api/github/github-api-repo-injection-token';
import { GITHUB_API_USER_INJECTION_TOKEN } from './api/github/github-api-user-injection-token';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ClientLoggerMethods,
  ClientLoggerService,
  CLIENT_LOGGER_HIDDEN_METHODS,
} from './core/client-logger/client-logger.service';
import { HeaderModule } from './core/header/header.module';
import { LOCAL_FORAGE } from './core/local-forage/local-forage';
import { ScriptLoaderModule } from './core/script-loader/script-loader.module';
import { ScriptParams } from './core/script-loader/script-params';
import { Socials } from './core/socials/socials';
import { SOCIALS_INJECTION_TOKEN } from './core/socials/socials-injection-token';
import { StaticService } from './core/static.service';
import { ListCommonConfig } from './shared/list-common/list-common-config';
import { LIST_COMMON_CONFIG_INJECTION_TOKEN } from './shared/list-common/list-common-config-injection-token';

// eslint-disable-next-line no-var
declare var gtag: any;
@NgModule({
  declarations: [AppComponent],
  imports: [
    // Core App Modules
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    HttpClientModule,
    // Core Template modules
    RouterModule,
    // Child Modules
    HeaderModule,

    ScriptLoaderModule.forRoot({
      scripts: [
        ...(environment.gtagCode
          ? [
              {
                src: `https://www.googletagmanager.com/gtag/js?id=${environment.gtagCode}`,
                async: true,
                preLoad: () => {
                  (window as any).dataLayer = (window as any).dataLayer || [];
                  (window as any).gtag = function () {
                    // eslint-disable-next-line prefer-rest-params
                    (window as any).dataLayer.push(arguments);
                  };
                  gtag('js', new Date());
                  gtag('config', environment.gtagCode);
                },
              } as ScriptParams,
            ]
          : []),
      ],
    }),
  ],
  providers: [
    {
      provide: LOCAL_FORAGE,
      useValue: localforage,
    },
    {
      provide: CODEWARS_API_USER_INJECTION_TOKEN,
      useValue: environment.codewarsUser,
    },
    {
      provide: GITHUB_API_USER_INJECTION_TOKEN,
      useValue: environment.githubUser,
    },
    {
      provide: GITHUB_API_REPO_INJECTION_TOKEN,
      useValue: environment.githubRepo,
    },
    {
      provide: FREE_CODE_CAMP_USER_INJECTION_TOKEN,
      useValue: environment.freeCodeCampUser,
    },
    {
      provide: SOCIALS_INJECTION_TOKEN,
      useFactory: (freeCodeCampUser: string) =>
        ({
          freeCodeCamp: `https://freeCodeCamp.org/${freeCodeCampUser}`,
          linkedIn: environment.linkedIn,
          npm: environment.npm,
          twitter: environment.twitter,
        } as Socials),
      deps: [FREE_CODE_CAMP_USER_INJECTION_TOKEN],
    },
    {
      provide: LIST_COMMON_CONFIG_INJECTION_TOKEN,
      useValue: {
        // **note** this features is not ready yet, hide behind feature flag
        hideTagFilter: environment.production,
        hideSortBy: environment.production,
      } as ListCommonConfig,
    },
    {
      provide: CLIENT_LOGGER_HIDDEN_METHODS,
      useValue: environment.production
        ? (['log', 'silly'] as ClientLoggerMethods[])
        : [],
    },
    ClientLoggerService,
    StaticService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

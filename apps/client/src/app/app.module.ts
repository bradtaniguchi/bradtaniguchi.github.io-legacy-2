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
import { ClientLoggerService } from './core/client-logger/client-logger.service';
import { HeaderModule } from './core/header/header.module';
import { LOCAL_FORAGE } from './core/local-forage/local-forage';
import { Socials } from './core/socials/socials';
import { SOCIALS_INJECTION_TOKEN } from './core/socials/socials-injection-token';
import { StaticService } from './core/static.service';
import { ListCommonConfig } from './shared/list-common/list-common-config';
import { LIST_COMMON_CONFIG_INJECTION_TOKEN } from './shared/list-common/list-common-config-injection-token';

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
        // **note** none of these features are ready yet, hide behind feature flag
        hideSearch: environment.production,
        hideSortByDate: environment.production,
        hideTagFilter: environment.production,
      } as ListCommonConfig,
    },
    ClientLoggerService,
    StaticService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

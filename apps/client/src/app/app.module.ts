import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';
import localforage from 'localforage';
import { environment } from '../environments/environment';
import { CODEWARS_API_USER_INJECTION_TOKEN } from './api/codewars-api-user-injection-token';
import { GITHUB_API_USER_INJECTION_TOKEN } from './api/github-api-user-injection-token';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientLoggerService } from './core/client-logger/client-logger.service';
import { HeaderModule } from './core/header/header.module';
import { LOCAL_FORAGE } from './core/local-forage/local-forage';
import { SidenavModule } from './core/sidenav/sidenav.module';
import { StaticService } from './core/static.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Core App Modules
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    // Core Template modules
    RouterModule,
    // Child Modules
    HeaderModule,
    SidenavModule,
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
    ClientLoggerService,
    StaticService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './core/header/header.module';
import { LOCAL_FORAGE } from './core/local-forage/local-forage';
import { SidenavModule } from './core/sidenav/sidenav.module';
import localforage from 'localforage';
import { ClientLoggerService } from './core/client-logger/client-logger.service';

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
    ClientLoggerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

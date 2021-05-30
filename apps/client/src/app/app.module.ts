import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './core/header/header.module';
import { SidenavModule } from './core/sidenav/sidenav.module';

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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

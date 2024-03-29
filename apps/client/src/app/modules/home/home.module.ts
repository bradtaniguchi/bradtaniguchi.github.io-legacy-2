import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OcticonModule } from '../../core/octicon/octicon.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LinkBoxComponent } from './link-box/link-box.component';
import { HomeProfileComponent } from './home-profile/home-profile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, LinkBoxComponent, HomeProfileComponent],
  imports: [
    // core modules
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    // Display Imports
    OcticonModule,
  ],
})
export class HomeModule {}

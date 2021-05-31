import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OcticonModule } from '../../core/octicon/octicon.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LinkBoxComponent } from './link-box/link-box.component';

@NgModule({
  declarations: [HomeComponent, LinkBoxComponent],
  imports: [
    // core modules
    CommonModule,
    HomeRoutingModule,
    // Display Imports
    OcticonModule,
  ],
})
export class HomeModule {}

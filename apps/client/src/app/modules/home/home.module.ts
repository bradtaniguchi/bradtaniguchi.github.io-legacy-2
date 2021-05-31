import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OcticonModule } from '../../core/octicon/octicon.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    // core modules
    CommonModule,
    HomeRoutingModule,
    // Display Imports
    OcticonModule,
  ],
})
export class HomeModule {}

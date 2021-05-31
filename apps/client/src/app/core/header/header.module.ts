import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { OcticonModule } from '../octicon/octicon.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    // Core Imports
    CommonModule,
    RouterModule,
    // Display Imports
    OcticonModule,
    // Library Imports
    FlexLayoutModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}

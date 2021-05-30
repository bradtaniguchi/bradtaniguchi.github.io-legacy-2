import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OcticonModule } from '../octicon/octicon.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    // Core Imports
    RouterModule,
    // Display Imports
    OcticonModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}

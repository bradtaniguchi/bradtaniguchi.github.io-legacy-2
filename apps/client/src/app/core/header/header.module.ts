import { NgModule } from '@angular/core';
import { OcticonModule } from '../octicon/octicon.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [OcticonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OcticonComponent } from './octicon.component';
import { SvgLoaderComponent } from './svg-loader.component';

@NgModule({
  declarations: [OcticonComponent, SvgLoaderComponent],
  imports: [CommonModule],
  exports: [OcticonComponent, SvgLoaderComponent],
})
export class OcticonModule {}

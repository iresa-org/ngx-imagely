import { NgModule } from '@angular/core';
import { NgxImagelyComponent } from './ngx-imagely.component';
import { ImagelyDirective } from './ngx-imagely.directive';

@NgModule({
  declarations: [NgxImagelyComponent, ImagelyDirective],
  imports: [],
  exports: [NgxImagelyComponent]
})
export class NgxImagelyModule {}

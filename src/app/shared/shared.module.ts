import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollspyDirective } from './scrollspy/scrollspy.directive';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { NgxImagelyModule } from '@iresa/ngx-imagely';

export const MAT_COMPONENTS = [MatCardModule, MatSelectModule, MatTabsModule];

@NgModule({
  declarations: [ScrollspyDirective],
  imports: [
    CommonModule,

    // material
    ...MAT_COMPONENTS,

    // Imagely
    NgxImagelyModule
  ],
  exports: [...MAT_COMPONENTS, ScrollspyDirective]
})
export class SharedModule {}

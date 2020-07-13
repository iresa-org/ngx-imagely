import { NgModule, ModuleWithProviders } from '@angular/core';
import { ImagelyDirective } from './ngx-imagely.directive';
import { NgxImagelyConfig, DEFAULT_CONFIG } from './ngx-imagely-config';
import { NgxImagelyConfigService } from './ngx-imagely-config.service';

@NgModule({
  declarations: [ImagelyDirective],
  imports: [],
  exports: [ImagelyDirective],
})
export class NgxImagelyModule {
  static forRoot(config?: NgxImagelyConfig): ModuleWithProviders<NgxImagelyModule> {
    return {
      ngModule: NgxImagelyModule,
      providers: [
        {
          provide: NgxImagelyConfigService,
          useValue: config ?? { ...DEFAULT_CONFIG },
        },
      ],
    };
  }
}

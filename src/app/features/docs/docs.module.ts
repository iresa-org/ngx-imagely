import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../../../environments/environment';
import { SharedModule } from 'src/app/shared/shared.module';
import { BasicUsageComponent } from './examples/basic-usage/basic-usage.component';
import { DocsContainerComponent } from './docs-container/docs-container.component';
import { LazyLoadingComponent } from './examples/lazy-loading/lazy-loading.component';
import { EagerLoadingComponent } from './examples/eager-loading/eager-loading.component';
import { MissingAltAttrComponent } from './examples/missing-alt-attr/missing-alt-attr.component';

const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
    data: { title: 'imagely.menu.docs' }
  }
];

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `${environment.i18nPrefix}/assets/i18n/`, '.json');
}

@NgModule({
  declarations: [
    DocsComponent,
    BasicUsageComponent,
    DocsContainerComponent,
    LazyLoadingComponent,
    EagerLoadingComponent,
    MissingAltAttrComponent
  ],
  imports: [
    CommonModule,

    SharedModule,

    TranslateModule.forChild({
      defaultLanguage: 'en',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),

    RouterModule.forChild(routes)
  ]
})
export class DocsModule {}

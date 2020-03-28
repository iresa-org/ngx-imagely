import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { faGithub, faMediumM, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { faCog, faBars, faRocket, faPowerOff, faUserCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `${environment.i18nPrefix}/assets/i18n/`, '.json');
}

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,

    // material
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatButtonModule,

    // 3rd party
    FontAwesomeModule,
    TranslateModule.forRoot({
      useDefaultLang: true,
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [],
  exports: [
    // material
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule,

    // 3rd party
    FontAwesomeModule,
    TranslateModule
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
    faIconLibrary: FaIconLibrary
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
    faIconLibrary.addIcons(
      faCog,
      faBars,
      faRocket,
      faPowerOff,
      faUserCircle,
      faPlayCircle,
      faGithub,
      faMediumM,
      faTwitter,
      faInstagram,
      faYoutube
    );
  }
}

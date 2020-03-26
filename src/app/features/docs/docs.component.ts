import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IMG_FEATURES } from './docs.component.list';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'imgwr-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {
  examples = IMG_FEATURES;
  currentSection$ = new BehaviorSubject<string>(IMG_FEATURES[0].id);

  constructor(private translate: TranslateService, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.translate.use('en');
  }

  onSectionChange(sectionId: string) {
    this.currentSection$.next(sectionId);
  }

  scrollTo(section) {
    this.document.querySelector('#' + section).scrollIntoView();
  }
}

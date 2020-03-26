import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  logo = require('../assets/logo.png');
  navigation = [
    { link: 'getting-started', label: 'imgwr.menu.getting-started' },
    { link: 'docs', label: 'imgwr.menu.docs' },
    { link: 'benchmark', label: 'imgwr.menu.benchmark' }
  ];

  theme = 'default-theme';

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.use('en');
  }
}

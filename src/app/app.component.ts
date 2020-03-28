import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  logo = '../assets/logo.png';
  navigation = [
    { link: 'getting-started', label: 'imagely.menu.getting-started' },
    { link: 'docs', label: 'imagely.menu.docs' },
    { link: 'benchmark', label: 'imagely.menu.benchmark' }
  ];

  theme = 'default-theme';

  constructor() {}

  ngOnInit() {}
}

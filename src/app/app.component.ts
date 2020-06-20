import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  logo = 'assets/logo.png';
  navigation = [
    { link: 'docs', label: 'imagely.menu.docs' },
    { link: 'benchmark', label: 'imagely.menu.benchmark' }
  ];

  theme = 'default-theme';

  constructor(private overlayContainer: OverlayContainer) {}

  ngOnInit() {
    this.updateOverlayTheme();
  }

  updateOverlayTheme() {
    const classlist = this.overlayContainer.getContainerElement().classList;
    classlist.add(this.theme);
  }
}

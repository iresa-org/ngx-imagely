import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iresa-ngx-imagely',
  templateUrl: './ngx-imagely.component.html'
})
export class NgxImagelyComponent implements OnInit {
  @Input()
  src: string;

  @Input()
  alt: string;

  @Input()
  loadingType: 'lazy' | 'eager' = 'lazy';

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-eager-loading',
  templateUrl: './eager-loading.component.html',
  styleUrls: ['./eager-loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EagerLoadingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

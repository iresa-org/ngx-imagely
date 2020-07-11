import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MatSelectChange } from '@angular/material/select';
import { IMG_KEYWORD_LIST } from './image-keywords';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-benchmark',
  templateUrl: './benchmark.component.html',
  styleUrls: ['./benchmark.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BenchmarkComponent implements OnInit {
  options = ['100', '500', '1000'];

  imageNum$ = new BehaviorSubject<number[]>([]);
  constructor(@Inject(DOCUMENT) private document: Document) {}

  imageNumFormCtrl = new FormControl(this.options[0]);

  ngOnInit(): void {}

  generateArray(value) {
    this.imageNum$.next(Array(value).fill(4));
  }

  onSelectionChange(e: MatSelectChange) {
    this.generateArray(+e.value);
  }

  scrollTop() {
    this.document.defaultView.scrollTo(0, 0);
  }
}

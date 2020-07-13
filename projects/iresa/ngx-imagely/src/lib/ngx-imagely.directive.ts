import { Directive, ElementRef, HostListener, OnInit, Renderer2, Input, Inject } from '@angular/core';
import { NgxImagelyConfigService } from './ngx-imagely-config.service';
import { NgxImagelyConfig } from './ngx-imagely-config';

@Directive({
  selector: '[imagely], img',
})
export class ImagelyDirective implements OnInit {
  @Input()
  loadingType: 'lazy' | 'eager';

  @Input()
  default: string;

  private readonly nativeEl: HTMLImageElement;

  private trialCount = 0;

  private readonly MAX_COUNT = 3;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(NgxImagelyConfigService) private config: NgxImagelyConfig
  ) {
    this.nativeEl = this.el.nativeElement;
  }

  ngOnInit(): void {
    this.checkAltText();
    this.setLoadingType();
  }

  @HostListener('error') onError() {
    if (this.trialCount < this.MAX_COUNT) {
      this.trialCount++;
      this.setImage(this.nativeEl.getAttribute('src'));
    }
    if (this.trialCount === this.MAX_COUNT) {
      this.setImage(this.default ?? this.config.default);
    }
  }

  private checkAltText() {
    const altText = this.el.nativeElement.alt;
    if (!altText || altText.trim() === '') {
      this.setErrorBorder();
    }
  }

  private setErrorBorder() {
    this.nativeEl.style.border = '5px solid red';
  }

  private setImage(src) {
    const defaultURL = this.default ?? this.config.default;
    if (defaultURL && defaultURL.trim() !== '') {
      this.renderer.setAttribute(this.nativeEl, 'src', src);
    }
  }

  private setLoadingType() {
    this.renderer.setAttribute(this.nativeEl, 'loading', this.loadingType ?? this.config.loadingType);
  }
}

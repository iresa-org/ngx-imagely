import { Directive, ElementRef, HostListener, OnInit, Renderer2, Input, Inject } from '@angular/core';
import { NgxImagelyConfigService } from './ngx-imagely-config.service';
import { NgxImagelyConfig } from './ngx-imagely-config';

@Directive({
  selector: '[imagely], img',
})
export class ImagelyDirective implements OnInit {
  @Input()
  set loadingType(value) {
    this._loadingType = value ?? this.config.loadingType;
  }

  get loadingType() {
    return this._loadingType;
  }

  @Input()
  set default(value) {
    this._default = value ?? this.config.default;
  }

  get default() {
    return this._default;
  }

  @Input()
  set retryCount(value) {
    this._retryCount = +value ?? this.config.retryCount;
  }

  get retryCount() {
    return this._retryCount;
  }

  private readonly nativeEl: HTMLImageElement;

  private trialCount = 0;

  private _loadingType = this.config.loadingType;

  private _default = this.config.default;

  private _retryCount = this.config.retryCount;

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
    if (this.retryCount === 0) {
      this.setImage(this.default);
    } else if (this.retryCount > 0) {
      if (this.trialCount < this.retryCount) {
        this.trialCount++;
        this.setImage(this.nativeEl.getAttribute('src'));
      }
      if (this.trialCount === this.retryCount) {
        this.setImage(this.default);
      }
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
    if (this.default && this.default.trim() !== '') {
      this.renderer.setAttribute(this.nativeEl, 'src', src);
    }
  }

  private setLoadingType() {
    this.renderer.setAttribute(this.nativeEl, 'loading', this.loadingType);
  }
}

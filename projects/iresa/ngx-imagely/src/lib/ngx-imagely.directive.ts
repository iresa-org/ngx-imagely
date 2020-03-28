import { Directive, ElementRef, HostListener, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[imagely]'
})
export class ImagelyDirective implements OnInit {
  @Input()
  loadingType: 'lazy' | 'eager' = 'lazy';

  private readonly nativeEl: HTMLImageElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.nativeEl = this.el.nativeElement;
  }

  ngOnInit(): void {
    this.checkAltText();
    this.setLoadingType();
  }

  @HostListener('error') onError() {
    this.setImageFallback();
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

  private setImageFallback() {
    this.renderer.setAttribute(this.nativeEl, 'src', 'https://www.amulyamica.com/files/noimage.jpg');
  }

  private setLoadingType() {
    this.renderer.setAttribute(this.nativeEl, 'loading', this.loadingType);
  }
}

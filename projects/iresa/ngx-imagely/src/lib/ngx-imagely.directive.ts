import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[imagely]'
})
export class ImagelyDirective implements OnInit {
  private readonly nativeEl: HTMLImageElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.nativeEl = this.el.nativeElement;
  }

  ngOnInit(): void {
    this.checkAltText();
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
}

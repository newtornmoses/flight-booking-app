import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFixsearchpannel]'
})
export class FixsearchpannelDirective {

  constructor(private element: ElementRef) { }

  @HostListener ('window:scroll')
  fixpannel () {
    if (scrollY >= 400) {
      this.element.nativeElement.style.position = 'fixed';
      this.element.nativeElement.style.top = '50px';
      this.element.nativeElement.style.margin = '0%';
      this.element.nativeElement.style.zIndex = '3000';
      this.element.nativeElement.style.minHeight = '50px';
      this.element.nativeElement.style.padding = '10px';
      // this.element.nativeElement.style.borderBottom = '1px solid wheat';
      this.element.nativeElement.style.boxShadow = '1px 2px 40px black';


    }else if (scrollY <= 400) {
      this.element.nativeElement.style.position = 'unset';
      this.element.nativeElement.style.minHeight = '200px';
      this.element.nativeElement.style.inlineHeight = '10px';
    }
  }

}

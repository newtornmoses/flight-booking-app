import { Directive, HostListener} from '@angular/core';
import {ElementRef} from '@angular/core';

@Directive({
  selector: '[appScrollheader]'
})
export class ScrollheaderDirective {
  traveltitle = ' ';
constructor(private element: ElementRef) {

 }

  @HostListener ('window:scroll')
  scrollit() {
 if (scrollY >= 400) {
  this.element.nativeElement.style.background = 'black';

  console.log(scrollY);
 } else if (scrollY < 400) {
  this.element.nativeElement.style.background = '';

 }
  }


}

import { Directive , ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appShowtitle]'
})
export class ShowtitleDirective {

  constructor(private element: ElementRef) { }
@HostListener ('window:scroll')
showtitle () {
  if (scrollY >= 400) {


  this.element.nativeElement.style.display = 'block';
  this.element.nativeElement.style.transform = 'scale(1.2)';
  this.element.nativeElement.style.transition = 'all 2s ease-in-out';


  }else {
    this.element.nativeElement.style.transform = 'scale(.9)';
  this.element.nativeElement.style.transition = 'all 2s ease-in-out';

  // this.element.nativeElement.style.display = 'none';

   }
}
}

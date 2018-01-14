import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDatepicker]'
})
export class DatepickerDirective {

  constructor(private element: ElementRef) { }

  

}

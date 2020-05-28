import { Directive, Renderer2, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]'
})
export class CapitalizeDirective {

  constructor(private renderer2: Renderer2,
    private eleRef: ElementRef<HTMLInputElement>) { }


  @HostListener('input') onChange() {
    const { value } = this.eleRef.nativeElement;
    const capitalize = (s) => {
      return !!s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : '';
    }
    this.renderer2.setProperty(this.eleRef.nativeElement, 'value',
      value.split(' ').map(v => capitalize(v)).join(' '));
  }

}
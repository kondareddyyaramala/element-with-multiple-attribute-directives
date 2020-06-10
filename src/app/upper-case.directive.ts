import { Directive, Renderer2, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[upperCase]'
})
export class UpperCaseDirective {

  constructor(private renderer2: Renderer2,
    private eleRef: ElementRef<HTMLInputElement>) { }


  @HostListener('input') onChange() {
    const { value } = this.eleRef.nativeElement;
    this.renderer2.setProperty(this.eleRef.nativeElement, 'value', value.toUpperCase());
  }

}
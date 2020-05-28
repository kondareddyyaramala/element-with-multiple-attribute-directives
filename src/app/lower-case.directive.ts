import { Directive, Renderer2, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[lowerCase]'
})
export class LowerCaseDirective {

  constructor(private renderer2: Renderer2, 
  private eleRef: ElementRef<HTMLInputElement>) { }


  @HostListener('input') onChange(){
    const { value } = this.eleRef.nativeElement;
    this.renderer2.setProperty(this.eleRef.nativeElement, 'value', (value || '').toLowerCase());
  }

}
import { Directive, Renderer2, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[maxLength]'
})
export class MaxLengthDirective {

  @Input('maxLength') maxLength;

  constructor(private renderer2: Renderer2,
    private eleRef: ElementRef<HTMLInputElement>) { }


  @HostListener('input') onChange() {
    let { value } = this.eleRef.nativeElement;
    console.log(`Max Length Directive : ${value}`);
    if (this.maxLength && !!value) {
      value = value.length < this.maxLength ? value : value.slice(0, this.maxLength);
    }
    this.renderer2.setProperty(this.eleRef.nativeElement, 'value', value);
  }

}
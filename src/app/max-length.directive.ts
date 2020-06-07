import { Directive, Renderer2, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMaxLength]'
})
export class MaxLengthDirective {

  @Input('appMaxLength') maxLength;

  constructor(private renderer2: Renderer2, 
  private eleRef: ElementRef<HTMLInputElement>) { }


  @HostListener('input') onChange(){
    let { value } = this.eleRef.nativeElement;
    if(this.maxLength && !!value){
      value = value.length < this.maxLength ? value : value.slice(0,this.maxLength);
    }
    this.renderer2.setProperty(this.eleRef.nativeElement, 'value', value);
  }

}
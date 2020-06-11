import { Component, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('input') input: ElementRef<HTMLInputElement>;


  onChange(v) {
    console.log(`Value :: ${v}`);
  }

  ngAfterViewInit(){
    fromEvent(this.input.nativeElement, 'input')
      .subscribe((v: any) => console.log(`fromEvennt : ${v!.target!.value}`));
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UpperCaseDirective } from './upper-case.directive';
import { MaxLengthDirective } from './max-length.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UpperCaseDirective, MaxLengthDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

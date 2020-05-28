import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LowerCaseDirective } from './lower-case.directive';
import { UpperCaseDirective } from './upper-case.directive';
import { CapitalizeDirective } from './capitalize.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, LowerCaseDirective, UpperCaseDirective, CapitalizeDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

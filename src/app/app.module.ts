import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClickableRndNumComponent } from './clickable-rnd-num/clickable-rnd-num.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickableRndNumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

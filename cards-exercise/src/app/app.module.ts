import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import { InstructionCompComponent } from './instruction-comp/instruction-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterCompComponent,
    InstructionCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

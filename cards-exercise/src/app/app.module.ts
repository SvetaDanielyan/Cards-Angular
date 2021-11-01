import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import { InstructionCompComponent } from './instruction-comp/instruction-comp.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterCompComponent,
    InstructionCompComponent,
    CardComponent,
    HeaderComponent,
    LayoutComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

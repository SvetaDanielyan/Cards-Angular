import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer-comp.component';
import { InstructionComponent } from './instruction/instruction-comp.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InstructionComponent,
    CardComponent,
    HeaderComponent,
    LayoutComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

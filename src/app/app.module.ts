import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EgyptComponent } from './egypt/egypt.component';
import { CanadaComponent } from './canada/canada.component';
import { ItalyComponent } from './italy/italy.component';
import { FranceComponent } from './france/france.component';
import { ChinaComponent } from './china/china.component';
import { JapanComponent } from './japan/japan.component';

@NgModule({
  declarations: [
    AppComponent,
    EgyptComponent,
    CanadaComponent,
    ItalyComponent,
    FranceComponent,
    ChinaComponent,
    JapanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

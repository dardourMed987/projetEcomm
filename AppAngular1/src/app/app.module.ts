import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Composant1Component } from './composant1/composant1.component';
import { ListePersonneComponent } from './liste-personne/liste-personne.component';

@NgModule({
  declarations: [
    AppComponent,
    Composant1Component,
    ListePersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

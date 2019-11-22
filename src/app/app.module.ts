import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPlanoComponent } from './lista-plano/lista-plano.component';
import { NovoPlanoComponent } from './novo-plano/novo-plano.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPlanoComponent,
    NovoPlanoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

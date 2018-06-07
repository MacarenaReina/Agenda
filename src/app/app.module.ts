import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { EventosService } from './eventos/eventos.service';
import { EventoComponent } from './evento/evento.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    EventoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

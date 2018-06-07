import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  //TODO: Vincular el servicio con una base de datos para que sea real
  eventos : any = [
    {'titulo':'Examen de Inglés', 'fecha':new Date(2018, 5, 1)},
    {'titulo':'Reunión con X', 'fecha':new Date(2018, 4, 31)},
    {'titulo':'Reunión en Santa Cruz', 'fecha':new Date(2018, 5, 30)},
    {'titulo':'Speaking', 'fecha':new Date(2018, 5, 15)},
  ];

  constructor() { }

  getEventos() {
    return this.eventos;
  }

  setEvento(evento) {
    this.eventos.push(evento);
  }
}

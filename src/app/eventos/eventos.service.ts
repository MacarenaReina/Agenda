import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor() { }

  getEventos() {
    return [
      {'titulo':'Examen de Inglés', 'fecha':new Date(2018, 5, 1)},
      {'titulo':'Reunión con X', 'fecha':new Date(2018, 4, 31)}
    ];
  }
}

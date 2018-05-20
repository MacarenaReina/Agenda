import { Component, OnInit } from '@angular/core';
import { EventosService } from './eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor(private eventosService : EventosService) { }
  
  eventos : any;

  ngOnInit() {
    this.eventos = this.eventosService.getEventos();
  }

}

import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ServicioService } from '../service/servicio.service';

@Component({
  selector: 'app-pilotos',
  standalone: true,
  templateUrl: './pilotos.component.html',
  styleUrls: ['./pilotos.component.scss']
})
export class PilotosComponent implements OnInit, OnChanges {
  @Input() pilotosUrls: string[] = [];
  pilotos: any[] = [];

  constructor(private servicioService: ServicioService) {}

  ngOnInit(): void {
    if (this.pilotosUrls.length) {
      this.cargarPilotos();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pilotosUrls'] && this.pilotosUrls.length) {
      this.cargarPilotos();
    }
  }

  cargarPilotos(): void {
    this.pilotos = [];
    this.pilotosUrls.forEach(url => {
      this.servicioService.obtenerPiloto(url).subscribe(data => {
        this.pilotos.push(data);
      }, error => {
        console.error('Error al cargar un piloto:', error);
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../service/servicio.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Piloto } from '../interficie/pilotos';
import { NavegacionComponent } from '../navegacion/navegacion.component';

@Component({
  selector: 'app-pilotos',
  standalone: true,
  imports: [NavegacionComponent],
  templateUrl: './pilotos.component.html',
  styleUrl: './pilotos.component.scss'
})
export class PilotosComponent implements OnInit{
pilotos: Piloto[] = [];


  constructor(private servicioService: ServicioService, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.servicioService.obtenerDetalle(+id).subscribe(data => {
        this.pilotos = data;
      }, error => {
        console.error('Error al cargar los detalles del piloto:', error);
      });
    }
  }

  cargarPilotos(): void {
    this.servicioService.obtenerPilotos().subscribe(data => {
      this.pilotos = [...this.pilotos, ...data.results];
    });
  }

  verDetalles(url: string): void {
    const id = url.split('/').slice(-2, -1)[0];
    this.router.navigate(['/pilotos', id]);
  }
}



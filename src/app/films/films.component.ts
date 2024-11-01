import { Component } from '@angular/core';
import { ServicioService } from '../service/servicio.service';
import { Router } from '@angular/router';
import { Films } from '../interficie/films';
import { NavegacionComponent } from '../navegacion/navegacion.component';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [NavegacionComponent],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent {
  films: Films[] = [];

  constructor(private servicioService: ServicioService, private router: Router) {
  }

  ngOnInit(): void {
    this.cargarFilms();
  }
  cargarFilms(): void {
    this.servicioService.obtenerPilotos().subscribe(data => {
      this.films = [...this.films, ...data.results];
    });
  }

  verDetalles(url: string): void {
    const id = url.split('/').slice(-2, -1)[0];
    this.router.navigate(['/films', id]);
  }
}

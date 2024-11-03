import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ServicioService } from '../service/servicio.service';

@Component({
  selector: 'app-films',
  standalone: true,
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit, OnChanges {
  @Input() filmsUrls: string[] = [];
  peliculas: any[] = [];

  constructor(private servicioService: ServicioService) {}

  ngOnInit(): void {
    if (this.filmsUrls.length) {
      this.cargarPeliculas();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filmsUrls'] && this.filmsUrls.length) {
      this.cargarPeliculas();
    }
  }

  cargarPeliculas(): void {
    this.peliculas = [];
    this.filmsUrls.forEach(url => {
      this.servicioService.obtenerPelicula(url).subscribe(data => {
        this.peliculas.push(data);
      }, error => {
        console.error('Error al cargar una película:', error);
      });
    });
  }
}

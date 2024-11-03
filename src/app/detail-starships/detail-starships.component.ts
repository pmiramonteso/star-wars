import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../service/servicio.service';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { PilotosComponent } from '../pilotos/pilotos.component';
import { FilmsComponent } from '../films/films.component';
import { FooterComponent } from '../footer/footer.component'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-starships',
  standalone: true,
  imports: [CommonModule, NavegacionComponent, PilotosComponent, FilmsComponent, FooterComponent],
  templateUrl: './detail-starships.component.html',
  styleUrls: ['./detail-starships.component.scss']
})
export class DetailStarshipsComponent implements OnInit {
  starship: any;
  pilotosUrls: string[] = [];
  filmsUrls: string[] = [];
  imageUrl: string = '';
  imageLoaded: boolean = false;
  backupImageUrl: string = 'assets/img/noDisponible.png';

  constructor(private route: ActivatedRoute, private servicioService: ServicioService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.servicioService.obtenerDetalle(+id).subscribe(data => {
        this.starship = data;
        this.pilotosUrls = this.starship.pilots;
        this.filmsUrls = this.starship.films;
        this.imageUrl = `https://starwars-visualguide.com/assets/img/starships/${this.starship.url.split('/').slice(-2, -1)[0]}.jpg`;
      }, error => {
        console.error('Error al cargar los detalles de la nave:', error);
      });
    }
  }
  onImageLoad(): void {
    this.imageLoaded = true;
  }

  onImageError(): void {
    this.imageUrl = this.backupImageUrl;
    this.imageLoaded = false;
  }
}

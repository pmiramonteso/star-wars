import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../service/servicio.service';
import { NavegacionComponent } from '../navegacion/navegacion.component';

@Component({
  selector: 'app-detail-starships',
  standalone: true,
  imports: [NavegacionComponent],
  templateUrl: './detail-starships.component.html',
  styleUrl: './detail-starships.component.scss'
})
export class DetailStarshipsComponent implements OnInit {
starship: any;

constructor (private route: ActivatedRoute, private servicioService: ServicioService) {}

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.servicioService.obtenerDetalle(+id).subscribe(data => {
      this.starship = data;
    }, error => {
      console.error('Error al cargar los detalles de la nave:', error);
    });
  }
}

}
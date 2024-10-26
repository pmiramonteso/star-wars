import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../service/servicio.service';
import { Router, RouterModule } from '@angular/router';
import { DetailStarshipsComponent } from '../detail-starships/detail-starships.component';

@Component({
  selector: 'app-starships',
  standalone: true,
  imports: [RouterModule, DetailStarshipsComponent],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss'
})
export class StarshipsComponent implements OnInit{
starships: any[] = [];
currentPage = 1;

constructor(private servicioService: ServicioService, private router: Router) {}

ngOnInit(): void {
  this.cargarStarships();
}

cargarStarships(): void {
  this.servicioService.obtenerStarship(this.currentPage).subscribe(data => {
    this.starships = [...this.starships, ...data.results];
  });
}
cargarNuevas(): void {
  this.currentPage++;
  this.cargarStarships();
}

verDetalles(url: string): void {
  const id = url.split('/').slice(-2, -1)[0];
  this.router.navigate(['/starship', id]);
}
}

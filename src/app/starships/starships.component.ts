import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ServicioService } from '../service/servicio.service';
import { Router, RouterModule } from '@angular/router';
import { DetailStarshipsComponent } from '../detail-starships/detail-starships.component';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { Subscription } from 'rxjs';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-starships',
  standalone: true,
  imports: [RouterModule, DetailStarshipsComponent, NavegacionComponent, FooterComponent],
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit, OnDestroy {
  starships: any[] = [];
  currentPage = 1;
  loading = false;
  private subscription: Subscription = new Subscription();

  constructor(private servicioService: ServicioService, private router: Router) {}

  ngOnInit(): void {
    this.cargarStarships();
  }

  cargarStarships(): void {
    if (this.loading) return;
    this.loading = true;

    this.servicioService.obtenerStarship(this.currentPage).subscribe(data => {
      this.starships = [...this.starships, ...data.results];
      this.currentPage++;
      this.loading = false;
    });
  }
  verDetalles(url: string): void {
    const id = url.split('/').slice(-2, -1)[0];
    this.router.navigate(['/starship', id]);
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const yOffset = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (yOffset + windowHeight >= documentHeight - 100) {
      this.cargarStarships();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}



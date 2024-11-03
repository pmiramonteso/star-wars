import { Component } from '@angular/core';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavegacionComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  navigateToSlide(event: MouseEvent, slideId: string) {
    event.preventDefault();
    const target = document.getElementById(slideId);
    target?.scrollIntoView({ behavior: 'smooth' });
  }
}

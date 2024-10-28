import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.scss'
})
export class NavegacionComponent {
isOpen = false;

  constructor(private router: Router) {}
  irAStarships() {
    this.router.navigate(['/starships']);
  }
toggleMenu() {
  this.isOpen = !this.isOpen;
}
}

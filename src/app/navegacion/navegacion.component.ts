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
  isAuthenticated: boolean = false;
  username: string | null = null;
  isOpen = false;
  

  constructor(private router: Router) {}
  irAStarships() {
    this.router.navigate(['/starships']);
  }
  toggleMenu() {
  this.isOpen = !this.isOpen;
}

ngOnInit() {
  this.checkAuthentication();
}

checkAuthentication() {
  this.username = localStorage.getItem('username');
  this.isAuthenticated = !!localStorage.getItem('accessToken');
}

logout() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('username');
  this.isAuthenticated = false;
  this.username = null;
  this.router.navigate(['/home']);
}
}

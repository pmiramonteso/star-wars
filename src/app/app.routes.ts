import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { StarshipsComponent } from './starships/starships.component';
import { DetailStarshipsComponent } from './detail-starships/detail-starships.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'navegacion', component: NavegacionComponent },
    { path: 'home', component: HomeComponent },
    { path: 'starships', component: StarshipsComponent }, //
    { path: 'starship/:id', component: DetailStarshipsComponent },
    { path: '**', redirectTo: 'home' },
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

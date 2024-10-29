import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { StarshipsComponent } from './starships/starships.component';
import { DetailStarshipsComponent } from './detail-starships/detail-starships.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent },
    { path: 'starships', component: StarshipsComponent, canActivate: [authGuard] },
    { path: 'starship/:id', component: DetailStarshipsComponent, canActivate: [authGuard]},
    { path: '**', redirectTo: '' }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

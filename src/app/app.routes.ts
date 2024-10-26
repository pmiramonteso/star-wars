import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { StarshipsComponent } from './starships/starships.component';
import { DetailStarshipsComponent } from './detail-starships/detail-starships.component';

export const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'starships', component: StarshipsComponent }, //
    { path: 'starship/:id', component: DetailStarshipsComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

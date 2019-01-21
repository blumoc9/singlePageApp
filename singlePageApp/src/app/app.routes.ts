import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { unescapeHtml } from '@angular/platform-browser/src/browser/transfer_state';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';

const APP_ROUTES: Routes = [
    {path :  'home', component :  HomeComponent},
    {path :  'about', component :  AboutComponent},
    {path :  'heroes', component :  HeroesComponent},
    {path : '**', pathMatch : 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
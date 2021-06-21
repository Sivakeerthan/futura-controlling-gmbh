import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { LobukoComponent } from './lobuko/lobuko.component';
import { WordpressResolver } from './common/wordpress/wordpress.resolver';

const routes: Routes = [
  {path: '', component: MainComponent, resolve: {pageData: WordpressResolver}},
  {path: 'home', component: HomeComponent, data: {animation: 'HomePage'}},
  {path: 'lobuko', component: LobukoComponent, data: {animation: 'LobukoPage'}},
  {path: 'beratung-treuhand', component: ServicesComponent, data: {animation: 'ServicesPage'}},
  {path: 'loadm', redirectTo: 'beratung-treuhand/#loadm', pathMatch: 'full'},
  {path: 'buchhaltung', redirectTo: 'beratung-treuhand/#buchhaltung', pathMatch: 'full'},
  {path: 'about', component: TeamComponent, data: {animation: 'TeamPage'}},
  {path: 'kontakt', component: KontaktComponent, data: {animation: 'KontaktPage'}},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

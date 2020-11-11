import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'home', component: HomeComponent, data: {animation: 'HomePage'}},
  {path: 'dienste', component: ServicesComponent, data: {animation: 'ServicesPage'}},
  {path: 'lobuko', redirectTo: 'dienste/#lobuko', pathMatch: 'full'},
  {path: 'loadm', redirectTo: 'dienste/#loadm', pathMatch: 'full'},
  {path: 'buchhaltung', redirectTo: 'dienste/#buchhaltung', pathMatch: 'full'},
  {path: 'team', component: TeamComponent, data: {animation: 'TeamPage'}},
  {path: 'kontakt', component: KontaktComponent, data: {animation: 'KontaktPage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

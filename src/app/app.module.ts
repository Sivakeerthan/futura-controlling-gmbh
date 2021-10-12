
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from './common/material.module';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DynamicHeaderService} from './common/dynamic-header.service';

import { MainComponent } from './main/main.component';
import { LobukoComponent } from './lobuko/lobuko.component';
import { LoadmComponent } from './services/loadm/loadm.component';
import { BuchhaltungComponent } from './services/buchhaltung/buchhaltung.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { CollapsibleCardComponent } from './common/templates/collapsible-card/collapsible-card.component';
import { MobileNavbarComponent } from './navbar/mobile-navbar/mobile-navbar.component';
import { InformationComponent } from './information/information.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LobukoComponent,
    LoadmComponent,
    BuchhaltungComponent,
    KontaktComponent,
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    TeamComponent,
    CollapsibleCardComponent,
    MobileNavbarComponent,
    InformationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPageScrollCoreModule,
    RouterModule
  ],
  providers: [
    DynamicHeaderService
  ],
  bootstrap: [AppComponent],
  exports:[
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MainComponent
  ]
})
export class AppModule { }

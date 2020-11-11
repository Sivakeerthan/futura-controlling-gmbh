import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('btnToggled',[
      state('false', style({
        // 'display':'none',
        'opacity': '0%'
       })),
      state('true', style({
        // 'display':'block',
        'opacity': '100%'
       })),
      transition('false => true', animate('300ms ease-in')),
      transition('true => false', animate('200ms ease-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit {

  public toggled:boolean = false;
  constructor() { }

  ngOnInit(){

  }

  toggleNav(){
    this.toggled = !this.toggled;
  }

}

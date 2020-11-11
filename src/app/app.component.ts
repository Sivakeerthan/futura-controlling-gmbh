import { Component, OnInit ,AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DynamicHeaderService } from './common/dynamic-header.service';
import { simpleFadeAnimation, slideInAnimation } from './common/animations';
import { MailService } from './common/mail.service';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation, simpleFadeAnimation]
})
export class AppComponent implements OnInit, AfterViewInit {
  public title = 'futura-controlling-gmbh';
  public header : string;  
  public isEntry:boolean = false;

  constructor(public HeaderService: DynamicHeaderService,
              public MailService: MailService,
              public cdr: ChangeDetectorRef,
              private Router: Router){}

  ngOnInit(){
    this.MailService.init(); 

    this.Router.events.subscribe(val=>{
      var nav = val as NavigationEnd;
      if(nav.url != null) this.isEntry = (nav.url == '/');

    }); 
  }

  ngAfterViewInit(){
    this.HeaderService.header.subscribe(val=>{
      this.cdr.detectChanges();
      setTimeout(()=>{      
        this.header = val ;
        },0);
    });

  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}

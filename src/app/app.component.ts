import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { DynamicHeaderService } from './common/dynamic-header.service';
import { slideInAnimation } from './common/animations';
import { Router, NavigationEnd, RouterOutlet, NavigationError } from '@angular/router';
import { WordpressService } from './common/wordpress/wordpress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit, AfterViewInit {
  public title = 'futura-controlling-gmbh';
  public header: string;
  public isEntry: boolean = false;

  constructor(public HeaderService: DynamicHeaderService,
    public WordPressService: WordpressService,
    public cdr: ChangeDetectorRef,
    private Router: Router) { }

  ngOnInit() {

    this.Router.events.subscribe(val => {
      var nav = val as NavigationEnd;
      if (nav.url != null || nav.urlAfterRedirects != null) {
        this.isEntry = (nav.url == '/' || nav.urlAfterRedirects == '/');
      }
    });

    this.WordPressService.GetCategories().then(res=>console.log(res),err=>console.error(err));
  }

  ngAfterViewInit() {
    this.HeaderService.header.subscribe(val => {
      this.cdr.detectChanges();
      setTimeout(() => {
        this.header = val;
      }, 0);
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}

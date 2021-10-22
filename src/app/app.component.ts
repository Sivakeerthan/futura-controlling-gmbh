import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { DynamicHeaderService } from './common/dynamic-header.service';
import { slideInAnimation } from './common/animations';
import { Router, NavigationEnd, RouterOutlet, NavigationError } from '@angular/router';
import { WordpressService } from './common/wordpress/wordpress.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  public title = 'futura-controlling-gmbh';
  public header: string;
  public isEntry: boolean = false;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(public HeaderService: DynamicHeaderService,
    public WordPressService: WordpressService,
    public cdr: ChangeDetectorRef,
    private Media: MediaMatcher,
    private Router: Router) { 

      this.mobileQuery = Media.matchMedia('(max-width: 640px)');
      this._mobileQueryListener = () => cdr.detectChanges();
      this.mobileQuery.addEventListener('change',this._mobileQueryListener);
    }


  ngOnDestroy(){
    this.mobileQuery.removeEventListener('change',this._mobileQueryListener);
  }

  ngOnInit() {

    this.Router.events.subscribe(val => {
      var nav = val as NavigationEnd;
      if (nav.url != null || nav.urlAfterRedirects != null) {
        this.isEntry = (nav.url == '/' || nav.urlAfterRedirects == '/');
      }
    });
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

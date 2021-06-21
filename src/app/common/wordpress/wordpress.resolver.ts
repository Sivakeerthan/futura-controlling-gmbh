import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';
import { WordpressService } from './wordpress.service';

@Injectable({
  providedIn: 'root'
})
export class WordpressResolver implements Resolve<boolean> {

  constructor(private WordPressService : WordpressService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.WordPressService.GetCategories();
  }
}

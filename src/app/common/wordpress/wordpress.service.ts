import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from './models/Category';
import { Post } from './models/Post';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  private Categories:Category[] = new Array<Category>();

  constructor(private httpClient: HttpClient) { }

  public GetCategories() : Promise<boolean>
  {
    return this.httpClient.get<Category[]>(environment.wpAPIUrl+'/categories').pipe(map((res:any[])=> {
      var i = 0;
      res.forEach(element => {
        if(element != null)
        {
          this.Categories[i] = new Category(element.id,element.name);
          i++;
        }
      });

      return (res.length > 0);
    })).toPromise();    
  }

  public GetPosts(page:string): Observable<Post[]>
  {    
    let PageCategory:Category;
    console.log(this.Categories);
    if(this.Categories.length > 0) 
    {
      PageCategory = this.Categories.find(element => element.Name == page);   

      let params = '/posts?categories='+PageCategory.ID.toString();
    
      return this.DoRequest(params);
    }
    else
    {
      return throwError("The Categories haven't been defined yet!");
    } 
      
  }

  private DoRequest(params:string): Observable<Post[]>
  {
    console.log("Sending Request: "+environment.wpAPIUrl+params);

    return this.httpClient.get<Post[]>(environment.wpAPIUrl+params);
  }

}

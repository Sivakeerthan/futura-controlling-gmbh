import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from './models/Category';
import { Post } from './models/Post';
import { Tag } from './models/Tag';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  private Categories:Category[] = new Array<Category>();
  private Tags:Tag[] = new Array<Tag>();

  constructor(private httpClient: HttpClient) { }

  public GetCategories() : Observable<boolean>
  {
    console.log('Getting Categories...');
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
    }));    
  }

  public GetTags() : Observable<boolean>
  {
    console.log('Getting Tags...');
    return this.httpClient.get<Category[]>(environment.wpAPIUrl+'/tags').pipe(map((res:any[])=> {
      var i = 0;
      res.forEach(element => {
        if(element != null)
        {
          this.Categories[i] = new Category(element.id,element.name);
          i++;
        }
      });

      return (res.length > 0);
    }));    
  }

  public GetPosts(page:string): Observable<Post[]>
  {    
    let PageCategory:Category;
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
    console.log("Requesting To: "+environment.wpAPIUrl+params);
    return this.httpClient.get<Post[]>(environment.wpAPIUrl+params).pipe(map((res:any[])=>{
        var arr:Post[] = new Array<Post>();
        var i = 0;
        res.forEach(element=>{
          arr[i] = {
            ID: element.id,
            Title: element.title.rendered,
            Content: element.content.rendered,
            Tags: this.AssignTags(element.tags)
          };
          i++;
        });
        return arr;
    }));
  }

  private AssignTags(tags:any[]) : Tag[]
  {
    let ClassTags:Tag[] = new Array<Tag>();
    var i = 0;
    tags.forEach(tag=>{
       var currTag = this.Tags.find(element => element.ID = tag.id);
       if(tag != null)
       {
          ClassTags[i] = currTag;
          i++;
       }
    });

    return ClassTags;
  }

}

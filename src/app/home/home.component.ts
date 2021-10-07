import { Component, OnInit } from '@angular/core';
import { DynamicHeaderService } from '../common/dynamic-header.service';
import { Post } from '../common/wordpress/models/Post';
import { WordpressUtil } from '../common/wordpress/wordpress-util';
import { WordpressService } from '../common/wordpress/wordpress.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public Posts:Post[];
  public Page:string = 'Home';

  constructor(public  WPUtil:WordpressUtil,
              private WPService:WordpressService, 
              private HeaderService: DynamicHeaderService) { }

  ngOnInit(): void {
    this.HeaderService.setTitle("Wilkommen bei futura controlling GmbH!");
    this.WPService.GetPosts(this.Page).subscribe(res=> this.Posts = res);
  }
  
}

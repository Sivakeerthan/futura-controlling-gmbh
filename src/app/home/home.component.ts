import { Component, OnInit } from '@angular/core';
import { DynamicHeaderService } from '../common/dynamic-header.service';
import { Post } from '../common/wordpress/models/Post';
import { WordpressService } from '../common/wordpress/wordpress.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private Posts:Post[];

  constructor(public WPService:WordpressService, 
    public HeaderService: DynamicHeaderService) { }

  ngOnInit(): void {
    this.HeaderService.setTitle("Wilkommen bei futura controlling GmbH!");
    this.WPService.GetPosts('Home').subscribe(res=> this.Posts = res);
  }
  
}

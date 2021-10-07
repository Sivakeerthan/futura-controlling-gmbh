import { Component, OnInit } from '@angular/core';
import { DynamicHeaderService } from '../common/dynamic-header.service';
import { Post } from '../common/wordpress/models/Post';
import { WordpressUtil } from '../common/wordpress/wordpress-util';
import { WordpressService } from '../common/wordpress/wordpress.service';

@Component({
  selector: 'app-lobuko',
  templateUrl: './lobuko.component.html',
  styleUrls: ['./lobuko.component.scss']
})
export class LobukoComponent implements OnInit {
  // Members
  public Posts:Post[];
  public Page:string = 'LoBuKo';

  constructor(private HeaderService:DynamicHeaderService,
              private WPService:WordpressService,
              public WPUtil:WordpressUtil) { }

  ngOnInit(): void {  
      this.HeaderService.setTitle("Lohnbuchkontrollen");
      this.WPService.GetPosts(this.Page).subscribe(arr=> {
        this.Posts = arr;
      });
  }

}

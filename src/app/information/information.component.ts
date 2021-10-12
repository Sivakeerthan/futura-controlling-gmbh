import { Component, OnInit } from '@angular/core';
import { DynamicHeaderService } from '../common/dynamic-header.service';
import { Post } from '../common/wordpress/models/Post';
import { WordpressUtil } from '../common/wordpress/wordpress-util';
import { WordpressService } from '../common/wordpress/wordpress.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  // Members
  public Posts:Post[];
  public Page:string = 'Information';

  constructor(private HeaderService:DynamicHeaderService,
              private WPService:WordpressService,
              public WPUtil:WordpressUtil) { }

  ngOnInit(): void {
    this.HeaderService.setTitle("Hier finden Sie nützliche Informationen und Links:");
    this.WPService.GetPosts(this.Page).subscribe(arr=> {
      this.Posts = arr;
    });
  }

}

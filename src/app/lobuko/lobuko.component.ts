import { Component, OnInit } from '@angular/core';
import { DynamicHeaderService } from '../common/dynamic-header.service';
import { Post } from '../common/wordpress/models/Post';
import { WordpressService } from '../common/wordpress/wordpress.service';

@Component({
  selector: 'app-lobuko',
  templateUrl: './lobuko.component.html',
  styleUrls: ['./lobuko.component.scss']
})
export class LobukoComponent implements OnInit {

  private Posts:Post[];

  constructor(private HeaderService:DynamicHeaderService,
              private WPService:WordpressService) { }

  ngOnInit(): void {  
      this.HeaderService.setTitle("Lohnbuchkontrollen");
      this.WPService.GetPosts('LoBuKo').subscribe(res=> this.Posts = res);
  }

}

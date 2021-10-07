import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../wordpress/models/Post';
import { WordpressUtil } from '../../wordpress/wordpress-util';
import { WordpressService } from '../../wordpress/wordpress.service';

@Component({
  selector: 'app-collapsible-card',
  templateUrl: './collapsible-card.component.html',
  styleUrls: ['./collapsible-card.component.scss']
})
export class CollapsibleCardComponent implements OnInit {

  @Input() page:string;
  @Input() post:Post;

  constructor(private WPService:WordpressService,
              public WPUtil:WordpressUtil) { }
  
  public ExpandedPosts:Post[];
  public Collapsed:boolean = true;

  ngOnInit(): void {
    this.WPService.GetExpandedPosts(this.page).subscribe(arr=> {
      this.ExpandedPosts = arr;
    });
  }

}

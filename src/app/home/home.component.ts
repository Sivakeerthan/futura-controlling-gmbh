import { Component, OnInit } from '@angular/core';
import { DynamicHeaderService } from '../common/dynamic-header.service';
import { WordpressService } from '../common/wordpress.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public WPService:WordpressService, 
    public HeaderService: DynamicHeaderService) { }

  ngOnInit(): void {
    this.HeaderService.setTitle("Wilkommen bei futura controlling GmbH!");
  }
  
}

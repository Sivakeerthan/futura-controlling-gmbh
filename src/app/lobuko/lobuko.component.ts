import { Component, OnInit } from '@angular/core';
import { DynamicHeaderService } from '../common/dynamic-header.service';

@Component({
  selector: 'app-lobuko',
  templateUrl: './lobuko.component.html',
  styleUrls: ['./lobuko.component.scss']
})
export class LobukoComponent implements OnInit {

  constructor(private HeaderService:DynamicHeaderService) { }

  ngOnInit(): void {  
      this.HeaderService.setTitle("Lohnbuchkontrollen");
  }

}

import { Component, OnInit } from '@angular/core';
import { DynamicHeaderService } from '../common/dynamic-header.service';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {

  constructor(public HeaderService:DynamicHeaderService) { }

  ngOnInit(): void {

    this.HeaderService.setTitle("Kontakt");
  }

}

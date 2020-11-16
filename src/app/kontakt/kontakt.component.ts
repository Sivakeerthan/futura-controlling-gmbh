import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicHeaderService } from '../common/dynamic-header.service';

declare var ol: any;

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {

  map: any;

  constructor(public HeaderService:DynamicHeaderService) { }

  ngOnInit(): void {
    this.HeaderService.setTitle("Kontakt");

    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([7.413227, 47.196594]),
        zoom: 18
      })
    });
  }

}

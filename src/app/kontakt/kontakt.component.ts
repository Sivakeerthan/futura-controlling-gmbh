import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicHeaderService } from '../common/dynamic-header.service';
import { Post } from '../common/wordpress/models/Post';
import { WordpressUtil } from '../common/wordpress/wordpress-util';
import { WordpressService } from '../common/wordpress/wordpress.service';

declare var ol: any;

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {

  public map: any;
  public Posts:Post[];
  public Page:string = "Kontakt";

  constructor(private HeaderService: DynamicHeaderService,
              private WPService: WordpressService,
              public  WPUtil : WordpressUtil) { }

  ngOnInit(): void {
    this.HeaderService.setTitle("Kontakt");

    this.WPService.GetPosts(this.Page).subscribe(res=> this.Posts = res);

    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([7.412070, 47.196500]),
        zoom: 18
      })
    });
    this.addPoint(47.196500,7.413070);
  }

  addPoint(lat: number, lng: number) {
    var vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.transform([lng, lat], 'EPSG:4326', 'EPSG:3857')),
        })]
      }),
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 0.7],
          anchorXUnits: "fraction",
          anchorYUnits: "fraction",
          src: "assets/futura-pin.png"
        })
      })
    });
    this.map.addLayer(vectorLayer);
  }

}

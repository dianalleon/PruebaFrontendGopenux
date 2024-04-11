import { Component, OnInit } from '@angular/core';
import {Feature, Map, View} from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import {
  DblClickDragZoom,
  defaults as defaultInteractions,
} from 'ol/interaction.js';
import {Point} from "ol/geom";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map!: Map;
  features: Feature<Point>[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  initMap(){
    this.map = new Map ({
      interactions: defaultInteractions().extend([new DblClickDragZoom()]),
      target: 'ol-map',
      layers: [
        new TileLayer({
          source: new OSM(),
        })
      ],
      view: new View({
        center: [0,0],
        zoom:5
      }),
    })
  }

  createFeature(lat:number, long:number){

  }

  createLayer(){

  }



}

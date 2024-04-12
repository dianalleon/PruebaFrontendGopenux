import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Feature, Map, View} from "ol";
import * as olProj from 'ol/proj';
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import {
  DblClickDragZoom,
  defaults as defaultInteractions,
} from 'ol/interaction.js';
import {Point} from "ol/geom";
import {Icon, Style} from "ol/style";
import {Coordinate} from "ol/coordinate";
import {BackendService} from "../../services/backend.service";
import {Notices} from "../../interfaces/notices";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Output() coordinatesMap: EventEmitter<Coordinate> = new EventEmitter<Coordinate>();
  @Input() coordinate!: Coordinate;
  @Input() view!: string;
  private map!: Map;
  private vectorSource!: VectorSource<Feature<Point>>;

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.initMap();
    this.backend.notice$.subscribe((map: Notices | null) => {
      if(map==null){
        this.selectFeature();
      } else {
        this.createFeature(map.locate.long, map.locate.lat)
      }
    })
  }

  // processMap(){
  //   if(this.view == 'view'){
  //     this.createFeature(this.coordinate[0], this.coordinate[1])
  //   } else if(this.view == 'edit'){
  //     this.createFeature(this.coordinate[0], this.coordinate[1])
  //     this.selectFeature();
  //   } else {
  //     this.selectFeature();
  //   }
  // }

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
        center: [0, 0],
        zoom:5
      }),
    })
    this.createLayer();
  }

  selectFeature(){
    this.map.on('click', event => {
      const coordinate: Coordinate = olProj.transform(event.coordinate, 'EPSG:3857', 'EPSG:4326')
      this.createFeature(coordinate[0], coordinate[1])
      this.coordinatesMap.emit(coordinate);
    });
  }

  createFeature(long:number, lat:number){
    this.vectorSource.clear();
    const feature: Feature<Point> = new Feature({
      geometry: new Point(
        olProj.fromLonLat([long, lat])),
    })

    feature.setStyle(new Style({
      image: new Icon({
        src: "https://images.vexels.com/media/users/3/199996/isolated/preview/f79ce454b6b358fcc1275f74173da3d6-icono-de-ubicacion-isometrico.png",
        scale: 0.1
      })
    }));

    this.map.setView(
      new View({
        center: olProj.transform([long, lat], 'EPSG:4326', 'EPSG:3857'),
        zoom: 8
      })
    );
    this.vectorSource.addFeature(feature);
  }

  createLayer(){
    this.vectorSource = new VectorSource();
    const layer = new VectorLayer({
      source: this.vectorSource
    });
    this.map.addLayer(layer);
  }
}

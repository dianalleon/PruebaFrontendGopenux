import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MaterialModule} from "../../material/material.module";

@NgModule({
  declarations: [
    MapComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }

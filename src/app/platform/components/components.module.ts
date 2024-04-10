import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MaterialModule} from "../../material/material.module";
import { FormRegisterComponent } from './form-register/form-register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    MapComponent,
    SidenavComponent,
    FormRegisterComponent
  ],
  exports: [
    FormRegisterComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class ComponentsModule { }

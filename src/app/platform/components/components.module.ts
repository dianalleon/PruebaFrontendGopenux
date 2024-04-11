import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MaterialModule} from "../../material/material.module";
import { FormRegisterComponent } from './form-register/form-register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { FormNoticeComponent } from './form-notice/form-notice.component';

@NgModule({
  declarations: [
    MapComponent,
    SidenavComponent,
    FormRegisterComponent,
    FormNoticeComponent
  ],
  exports: [
    FormRegisterComponent,
    SidenavComponent,
    MapComponent,
    FormNoticeComponent
  ],
    imports: [
      CommonModule,
      MaterialModule,
      ReactiveFormsModule,
      RouterModule,
    ]
})
export class ComponentsModule { }

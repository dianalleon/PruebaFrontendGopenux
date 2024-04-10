import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {CreateNoticeComponent} from "./create-notice/create-notice.component";
import {ListNoticesComponent} from "./list-notices/list-notices.component";
import {HomeComponent} from "./home.component";
import {MaterialModule} from "../../material/material.module";

@NgModule({
  declarations: [
    CreateNoticeComponent,
    ListNoticesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }

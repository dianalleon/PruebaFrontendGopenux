import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {CreateNoticeComponent} from "./create-notice/create-notice.component";
import {ListNoticesComponent} from "./list-notices/list-notices.component";
import {HomeComponent} from "./home.component";
import {MaterialModule} from "../../material/material.module";
import {ComponentsModule} from "../components/components.module";
import { EditNoticesComponent } from './edit-notices/edit-notices.component';
import { ViewNoticeComponent } from './view-notice/view-notice.component';
import {ProcessNoticeComponent} from "./process-notice/process-notice.component";

@NgModule({
  declarations: [
    CreateNoticeComponent,
    ListNoticesComponent,
    HomeComponent,
    EditNoticesComponent,
    ViewNoticeComponent,
    ProcessNoticeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class HomeModule { }

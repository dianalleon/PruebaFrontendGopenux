import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {CreateNoticeComponent} from "./create-notice/create-notice.component";
import {ListNoticesComponent} from "./list-notices/list-notices.component";
import {HomeComponent} from "./home.component";
import {MaterialModule} from "../../material/material.module";
import {ComponentsModule} from "../components/components.module";
import { EditNoticesComponent } from './edit-notices/edit-notices.component';

@NgModule({
  declarations: [
    CreateNoticeComponent,
    ListNoticesComponent,
    HomeComponent,
    EditNoticesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class HomeModule { }

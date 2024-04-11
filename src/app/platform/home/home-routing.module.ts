import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateNoticeComponent} from "./create-notice/create-notice.component";
import {ListNoticesComponent} from "./list-notices/list-notices.component";
import {HomeComponent} from "./home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'create-notice', component: CreateNoticeComponent },
      { path: 'list-notice', component: ListNoticesComponent },
      { path: '**', redirectTo: 'list-notice' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

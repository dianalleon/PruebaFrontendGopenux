import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./platform/services/auth.guard";

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./platform/auth/auth.module').then(m => m.AuthModule) },
  { path: 'home', loadChildren: () => import('./platform/home/home.module').then(m => m.HomeModule), canLoad: [AuthGuard] },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

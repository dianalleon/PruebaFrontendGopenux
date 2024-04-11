import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Notices} from "../interfaces/notices";


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  data: Notices[] = [];


  getListNotices(): void{

  }

}

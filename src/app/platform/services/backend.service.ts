import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category, Notices} from "../interfaces/notices";
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient, private auth: AuthService) { }

  getListNotices(): void{

  }

  getLisCategory(): Observable<Category[]> {
    const headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${ this.auth.token }`);
    return this.http.get<Category[]>(this.apiUrl + `/api/getAll/category`, {headers})
  }

}

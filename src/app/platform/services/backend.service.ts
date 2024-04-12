import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Category, Notices} from "../interfaces/notices";
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private apiUrl: string = environment.apiUrl;
  private notice: BehaviorSubject<Notices | null> = new BehaviorSubject<Notices | null>(null);

  public notice$: Observable<Notices | null> = this.notice.asObservable();

  constructor(private http: HttpClient, private auth: AuthService) { }

  setNotice(notice: Notices){
    this.notice.next(notice);
  }

  getListNotices(): Observable<Notices[]>{
    const headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${ this.auth.token }`);
    return this.http.get<Notices[]>(this.apiUrl + `/api/getAll/notice`, {headers})
  }

  getLisCategory(): Observable<Category[]> {
    const headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${ this.auth.token }`);
    return this.http.get<Category[]>(this.apiUrl + `/api/getAll/category`, {headers})
  }

  postCreateNotice(body:Notices): Observable<Notices>{
    const headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${ this.auth.token }`);
    return this.http.post<Notices>(this.apiUrl + `/api/create/notice`, body, {headers})
  }

  postEditNotice(id: string, body: Notices):Observable<Notices>{
    const headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${ this.auth.token }`);
    return this.http.patch<Notices>(this.apiUrl + `/api/edit/notice/${id}`, body, {headers})
  }
}

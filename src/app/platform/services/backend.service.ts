import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Category, Notices, Paginator} from "../interfaces/notices";
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private apiUrl: string = environment.apiUrl;
  private notice: BehaviorSubject<Notices | null> = new BehaviorSubject<Notices | null>(null);
  private listNotices: BehaviorSubject<Paginator | null> = new BehaviorSubject<Paginator | null>(null);

  public notice$: Observable<Notices | null> = this.notice.asObservable();
  public listNotices$: Observable<Paginator | null> = this.listNotices.asObservable();

  constructor(private http: HttpClient, private auth: AuthService) { }

  setNotice(notice: Notices | null){
    this.notice.next(notice);
  }

  getListNotices():void{
    this.setListNotices(1);
  }

  setListNotices(page: number){
    const headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${ this.auth.token }`);
    this.http.get<Paginator>(this.apiUrl + `/api/getAll/notice?page=${page}&limit=5`, {headers}).subscribe((response: Paginator) => {
      this.listNotices.next(response);
    })
  }

  getOneNotice(id: string): Observable<Notices>{
    const headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${ this.auth.token }`);
    return this.http.get<Notices>(this.apiUrl + `/api/getOne/notice/${id}`, {headers})
  }

  getLisCategory(): Observable<Category[]> {
    const headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${ this.auth.token }`);
    return this.http.get<Category[]>(this.apiUrl + `/api/getAll/category`, {headers})
  }

  postCreateNotice(body:Notices): Observable<Notices>{
    const headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${ this.auth.token }`);
    return this.http.post<Notices>(this.apiUrl + `/api/create/notice`, body, {headers})
  }

  patchEditNotice(id: string, body: Notices):Observable<Notices>{
    const headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${ this.auth.token }`);
    return this.http.patch<Notices>(this.apiUrl + `/api/edit/notice/${id}`, body, {headers})
  }

  patchStatusNotices(id:string): Observable<any>{
    const headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${ this.auth.token }`);
    const body: null = null;
    return this.http.patch(this.apiUrl + `/api/procedure/notice/${id}`, body, {headers})
  }
}

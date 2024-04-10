import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }


}

import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthUser, ResponseAuth} from "../interfaces/auth-user";
import {User} from "../interfaces/user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient, private router: Router) { }

  get token(){
    return localStorage.getItem('token')
  }

  get rol(){
    return localStorage.getItem('rol')
  }

  login(body: AuthUser){
    this.http.post<ResponseAuth>(this.apiUrl + `/api/login`, body).subscribe((userLogin: ResponseAuth) => {
      localStorage.setItem('token', userLogin.token)
      localStorage.setItem('rol', userLogin.rol)
      this.router.navigateByUrl('/home')
    })
  }

  registerCitizen(body: User){
    this.http.post<User>(this.apiUrl + `/api/register-user/citizen`, body).subscribe((userRegister: User) => {
      this.router.navigateByUrl('/auth/login')
    })
  }

  registerTechnical(body: User): void {
    this.http.post<User>(this.apiUrl + `/api/register-user/technical`, body).subscribe((userRegister: User): void => {
      this.router.navigateByUrl('/auth/login')
    })
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}

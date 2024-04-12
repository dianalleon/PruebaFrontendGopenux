import { Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {

  constructor(private auth: AuthService) { }

  registerUser(user: any){
    this.auth.registerCitizen(user);
  }
}

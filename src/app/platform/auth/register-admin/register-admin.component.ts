import { Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent {

  constructor(private auth: AuthService) { }

  registerAdmin(user: any){
    this.auth.registerTechnical(user)
  }
}

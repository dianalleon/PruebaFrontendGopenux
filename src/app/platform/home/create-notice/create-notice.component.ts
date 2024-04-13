import { Component} from '@angular/core';
import {Notices} from "../../interfaces/notices";
import {BackendService} from "../../services/backend.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-notice',
  templateUrl: './create-notice.component.html',
  styleUrls: ['./create-notice.component.scss']
})
export class CreateNoticeComponent{

  constructor(private backend: BackendService, private toastr: ToastrService, private router: Router) { }

  createNotice(notice: Notices) {
    this.backend.postCreateNotice(notice).subscribe(noticeCreate => {
      this.toastr.success('El aviso fue creado correctamente')
      this.backend.getListNotices();
      this.router.navigateByUrl(`/home/list-notice`)
    })
  }
}

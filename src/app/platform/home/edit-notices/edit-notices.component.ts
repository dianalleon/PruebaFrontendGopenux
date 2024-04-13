import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {Notices} from "../../interfaces/notices";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit-notices',
  templateUrl: './edit-notices.component.html',
  styleUrls: ['./edit-notices.component.scss']
})
export class EditNoticesComponent implements OnInit {

  edit!: Notices;

  constructor(private backend: BackendService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(result => {
      const id = result.get('id') || undefined;
      if(id){
        this.backend.getOneNotice(id).subscribe((response: Notices) => this.edit = response)
      }
    })
  }

  postEditNotice(notice:Notices){
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id){
      this.backend.patchEditNotice(id, notice).subscribe((notice: Notices) => {
        this.toastr.success('Se edito el aviso correctamente')
      })
    } else {
      this.toastr.error('No se pudo editar el aviso')
    }
    this.router.navigateByUrl(`/home/list-notice`)
  }
}

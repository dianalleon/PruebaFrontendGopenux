import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {Notices} from "../../interfaces/notices";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-notices',
  templateUrl: './edit-notices.component.html',
  styleUrls: ['./edit-notices.component.scss']
})
export class EditNoticesComponent implements OnInit {

  editNotice!: Notices;

  constructor(private backend: BackendService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.backend.notice$.subscribe( (notice: Notices | null) => {
      if(notice){
        this.editNotice = notice;
      }
    })
  }

  postEditNotice(notice:Notices){
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.backend.postEditNotice(id, notice).subscribe(notice => {
        console.log(notice)
      })
    } else {
      console.log('no se puede editar')
    }
    this.router.navigateByUrl(`/home/list-notice`)
  }
}

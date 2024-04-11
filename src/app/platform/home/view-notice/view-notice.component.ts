import { Component, OnInit } from '@angular/core';
import {Notices} from "../../interfaces/notices";
import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'app-view-notice',
  templateUrl: './view-notice.component.html',
  styleUrls: ['./view-notice.component.scss']
})
export class ViewNoticeComponent implements OnInit {

  viewNotice!: Notices;
  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.backend.notice$.subscribe( (notice: Notices | null) => {
      if(notice){
        this.viewNotice = notice;
      }
    })
  }

}

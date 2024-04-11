import { Component, OnInit } from '@angular/core';
import {Notices} from "../../interfaces/notices";
import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'app-create-notice',
  templateUrl: './create-notice.component.html',
  styleUrls: ['./create-notice.component.scss']
})
export class CreateNoticeComponent implements OnInit {

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
  }

  createNotice(notice: Notices) {
    this.backend.postCreateNotice(notice).subscribe(noticeCreate => {
      console.log(noticeCreate)
    })
  }
}

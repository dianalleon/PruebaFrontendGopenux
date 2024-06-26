import { Component, OnInit } from '@angular/core';
import {Notices} from "../../interfaces/notices";
import {BackendService} from "../../services/backend.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-view-notice',
  templateUrl: './view-notice.component.html',
  styleUrls: ['./view-notice.component.scss']
})
export class ViewNoticeComponent implements OnInit {

  notice!: Notices;
  view: boolean = false;

  constructor(private backend: BackendService, public dialogRef: MatDialogRef<ViewNoticeComponent>) {
  }

  ngOnInit(): void {
    this.viewNotice();
  }

  viewNotice() {
    this.backend.notice$.subscribe((notice: Notices | null) => {
      if (notice) {
        this.notice = notice;
        this.view = true;
      }
    })
  }

  onNoClick() {
    this.dialogRef.close();
  }
}

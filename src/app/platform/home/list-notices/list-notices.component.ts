import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Notices, Paginator} from "../../interfaces/notices";
import {BackendService} from "../../services/backend.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ViewNoticeComponent} from "../view-notice/view-notice.component";
import {AuthService} from "../../services/auth.service";
import {ProcessNoticeComponent} from "../process-notice/process-notice.component";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-list-notices',
  templateUrl: './list-notices.component.html',
  styleUrls: ['./list-notices.component.scss']
})
export class ListNoticesComponent implements OnInit {

  displayedColumns:string[] = ['description', 'category', 'status', 'options'];
  dataSource!: MatTableDataSource<Notices>;

  length!: number;
  pageIndex!: number;
  pageSize: number = 5;
  admin: boolean = false;

  constructor(private backend: BackendService, private router: Router, public dialog: MatDialog, private auth:AuthService) { }

  ngOnInit(): void {
    this.backend.setNotice(null);
    this.admin = this.auth.rol === 'ROLE_ADMIN';
    this.listNotices();
  }

  listNotices(){
    this.backend.setListNotices(1);
    this.backend.listNotices$.subscribe((responseNotices: Paginator | null) => {
      if(responseNotices){
        this.length = responseNotices.total;
        this.pageIndex = responseNotices.page+1;
        this.dataSource = new  MatTableDataSource<Notices>(responseNotices.notices);
      }
    })
  }

  handlePageEvent(event:PageEvent){
    this.backend.setListNotices(event.pageIndex+1)
  }

  editNotice(notice:Notices){
    this.router.navigateByUrl(`/home/edit/${notice.id}`);
    this.backend.setNotice(notice);
  }

  openDialog(notice: Notices){
    this.backend.setNotice(notice);
    this.dialog.open(ViewNoticeComponent, {
      width: '800px',
      height: '600px'
    })
  }

  openDialogProcess(notice: Notices){
    this.backend.setNotice(notice)
    this.dialog.open(ProcessNoticeComponent, {
      width: '500px',
      height: '200px'
    })
  }
}

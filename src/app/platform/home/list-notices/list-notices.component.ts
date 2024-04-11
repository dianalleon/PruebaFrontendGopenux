import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Notices} from "../../interfaces/notices";
import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'app-list-notices',
  templateUrl: './list-notices.component.html',
  styleUrls: ['./list-notices.component.scss']
})
export class ListNoticesComponent implements OnInit {

  displayedColumns:string[] = ['description', 'category', 'status'];
  dataSource!: MatTableDataSource<Notices>;

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.getListNotices();
  }

  getListNotices(){
    this.backend.getListNotices().subscribe((notices: Notices[]) => {
      this.dataSource = new  MatTableDataSource<Notices>(notices);
    })
  }

}

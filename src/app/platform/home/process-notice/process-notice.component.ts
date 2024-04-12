import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-process-notice',
  templateUrl: './process-notice.component.html',
  styleUrls: ['./process-notice.component.scss']
})
export class ProcessNoticeComponent implements OnInit {

  statusNotice: string[] = ['Nuevo', 'En progreso', 'Validando', 'Solucionado'];
  statusSelect: string = "";

  constructor(private backend:BackendService, public dialogRef: MatDialogRef<ProcessNoticeComponent>) { }

  ngOnInit(): void {
    this.backend.notice$.subscribe(notice =>{
      if(notice){
        this.statusSelect= notice.status;
      }
    })
  }

  onNoClick(){
    this.dialogRef.close();
  }

  protected readonly self = self;
}

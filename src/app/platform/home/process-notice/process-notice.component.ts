import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {MatDialogRef} from "@angular/material/dialog";
import {Notices} from "../../interfaces/notices";

@Component({
  selector: 'app-process-notice',
  templateUrl: './process-notice.component.html',
  styleUrls: ['./process-notice.component.scss']
})
export class ProcessNoticeComponent implements OnInit {

  statusNotice: string[] = ['Nuevo', 'En ejecucion', 'Validado', 'Solucionado'];
  statusSelect: string = "";
  id: string = "";

  constructor(private backend:BackendService, public dialogRef: MatDialogRef<ProcessNoticeComponent>) { }

  ngOnInit(): void {
    this.backend.notice$.subscribe((notice: Notices | null) =>{
      if(notice && notice.id){
        this.statusSelect= notice.status;
        this.id = notice.id;
      }
    })
  }

  onNoClick(){
    this.dialogRef.close();
  }

  onSubmit(){
    this.backend.patchStatusNotices(this.id).subscribe(response => {
      this.backend.getListNotices();
      this.onNoClick();
    })
  }

}

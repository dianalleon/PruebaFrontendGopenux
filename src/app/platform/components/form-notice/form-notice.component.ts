import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BackendService} from "../../services/backend.service";
import {Category, Notices} from "../../interfaces/notices";
import {Coordinate} from "ol/coordinate";

@Component({
  selector: 'app-form-notice',
  templateUrl: './form-notice.component.html',
  styleUrls: ['./form-notice.component.scss']
})
export class FormNoticeComponent implements OnInit {

  @Input() notice!: Notices;
  @Output() formNotice: EventEmitter<Notices> = new EventEmitter<Notices>();

  form!: FormGroup;
  categorys: Category[] = [];

  constructor(private formBuilder: FormBuilder, private backend: BackendService) { }

  ngOnInit(): void {
    this.getLisCategory();
    this.initForm();
  }

  getLisCategory(){
    this.backend.getLisCategory().subscribe( (categorys: Category[]) => {
      this.categorys = categorys;
    })
  }

  initForm(){
    this.form = this.formBuilder. group({
      description: [this.notice.description, Validators.required],
      category: [this.notice.category.id, Validators.required]
    })
  }

  coordinateMap(map: Coordinate){
    this.form.addControl('locate', this.formBuilder.control(map))
  }

  onSubmit(){
    this.formNotice.emit(this.form.value)
  }
}

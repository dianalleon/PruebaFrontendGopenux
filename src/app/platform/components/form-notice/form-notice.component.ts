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

  @Output() formNotice: EventEmitter<Notices> = new EventEmitter<Notices>();
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Input() notice!: Notices;
  @Input() view!: boolean;

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
  initForm() {
    if (this.notice) {
      this.form = this.formBuilder.group({
        description: [this.notice.description, Validators.required],
        category: [this.notice.category.id, Validators.required]
      });
    } else {
      this.form = this.formBuilder.group({
        description: ['', Validators.required],
        category: ['', Validators.required]
      });
    }
  }
  coordinateMap(map: Coordinate){
    const locate = { long: map[0], lat: map[1] }
    this.form.addControl('locate', this.formBuilder.control(locate))
  }
  onSubmit(){
    if (this.form && this.form.valid) {
      this.formNotice.emit(this.form.value);
    }
  }
  onNoClick(){
    this.closeModal.emit();
  }
}

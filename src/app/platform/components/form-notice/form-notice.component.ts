import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BackendService} from "../../services/backend.service";
import {Category} from "../../interfaces/notices";

@Component({
  selector: 'app-form-notice',
  templateUrl: './form-notice.component.html',
  styleUrls: ['./form-notice.component.scss']
})
export class FormNoticeComponent implements OnInit {

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
      console.log(categorys)
    })
  }

  initForm(){
    this.form = this.formBuilder. group({
      description: ['', Validators.required],
      category: ['', Validators.required]
    })
  }

  onSubmit(){
    console.log(this.form.value)
    //Capturar datos del formulario
    //añadir los datos del mapa atravez de un output
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  @Output() formDatos: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  form!: FormGroup;
  hide: boolean = true;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
  }
  toggleVisibility(): void {
    this.hide = !this.hide;
  }
  initForm(): void {
    this.form = this.formBuilder. group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/)]],
    })
  }
  onSubmit(){
    this.route.url.subscribe(urlSegments => {
      const rol:string = urlSegments[urlSegments.length - 1].path;
      this.form.addControl('rol', this.formBuilder.control(rol))
    });
    this.formDatos.emit(this.form.value);
  }
}

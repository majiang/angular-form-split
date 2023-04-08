import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { FormBasicComponent } from '../form-basic/form-basic.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @ViewChild('basic') basicComponent!: FormBasicComponent
  form = new FormGroup({
    common: new FormGroup({
      one: new FormControl(""),
      two: new FormControl(""),
    }),
    a: new FormGroup({
      one: new FormGroup({
        a: new FormControl(""),
        b: new FormControl(""),
      }),
      two: new FormControl(""),
    }),
    b: new FormGroup({
      one: new FormControl(""),
      two: new FormControl(""),
    }),
  })
  onSubmit() {
    const formData = this.form.value
    console.log(formData)
    console.log(this.basicComponent.form.value)
  }
}

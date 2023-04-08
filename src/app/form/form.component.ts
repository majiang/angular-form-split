import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  form = new FormGroup({
    basic: new FormGroup({
      one: new FormGroup({
        a: new FormControl(""),
        b: new FormControl(""),
      }),
      two: new FormControl(""),
    }),
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
}

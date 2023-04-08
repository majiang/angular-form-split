import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-basic',
  templateUrl: './form-basic.component.html',
  styleUrls: ['./form-basic.component.scss']
})
export class FormBasicComponent {
  form = new FormGroup({
    one: new FormGroup({
      a: new FormControl(""),
      b: new FormControl(""),
    }),
    two: new FormControl(""),
  })
}

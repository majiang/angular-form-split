import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.scss']
})
export class FormAComponent {
  form = new FormGroup({
    one: new FormGroup({
      a: new FormControl(""),
      b: new FormControl(""),
    }),
    two: new FormControl(""),
  })
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-b',
  templateUrl: './form-b.component.html',
  styleUrls: ['./form-b.component.scss']
})
export class FormBComponent {
  form = new FormGroup({
    one: new FormControl(""),
    two: new FormControl(""),
  })
}

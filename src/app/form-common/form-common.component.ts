import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-common',
  templateUrl: './form-common.component.html',
  styleUrls: ['./form-common.component.scss']
})
export class FormCommonComponent {
  form = new FormGroup({
    one: new FormControl(""),
    two: new FormControl(""),
  })
}

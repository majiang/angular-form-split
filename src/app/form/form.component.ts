import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { FormBasicComponent } from '../form-basic/form-basic.component';
import { FormCommonComponent } from '../form-common/form-common.component';
import { FormAComponent } from '../form-a/form-a.component';
import { FormBComponent } from '../form-b/form-b.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @ViewChild('basic') basicComponent!: FormBasicComponent
  @ViewChild('common') commonComponent!: FormCommonComponent
  @ViewChild('a') aComponent!: FormAComponent
  @ViewChild('b') bComponent!: FormBComponent

  onSubmit() {
    const formData = {
      basic: this.basicComponent.form.value,
      common: this.commonComponent.form.value,
      a: this.aComponent.form.value,
      b: this.bComponent.form.value,
    }
    console.log(formData)
  }
}

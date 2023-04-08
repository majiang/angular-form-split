import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormBasicComponent } from './form-basic/form-basic.component';
import { FormCommonComponent } from './form-common/form-common.component';
import { FormAComponent } from './form-a/form-a.component';
import { FormBComponent } from './form-b/form-b.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormBasicComponent,
    FormCommonComponent,
    FormAComponent,
    FormBComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, DynamicFormComponent, DynamicFormQuestionComponent, TestComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}

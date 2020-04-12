import { Injectable } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { FieldConfig } from './models/field-config';
import { Schema } from './models/schema';
import { FormConfig } from './models/form-config';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  

  constructor(private formBuilder: FormBuilder) { }

  getFormConfig(schema: Schema[]): FormConfig {
    const formConfig = {
      schema: schema
    } as FormConfig;
    const controls: any = {};
    this.prepareFormGroup(schema, controls);
    formConfig.formGroup = this.formBuilder.group(controls);
    return formConfig;
  }

  prepareFormGroup(schema: Schema[], controls) {
    schema.forEach(nav => {
      nav.children.forEach(side => {
        side.children.forEach(panel => {
          panel.children.forEach(control => {
            const field = control.field;
            /* creating form controls for reactive form */
            controls[field.property] = this.getControlConfig(field);
          });
        });
      });
    });
  }

  getControlConfig(field: FieldConfig) {
    const validators = [];
    if (field.required) {
      validators.push(Validators.required);
    }

    if (validators.length) {
      return [field.value, validators];
    }
    return field.value;
  }
}

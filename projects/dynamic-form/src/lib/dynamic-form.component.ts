import { Component, OnInit, Input } from '@angular/core';
import { DynamicFormService } from './dynamic-form.service';
import { FormConfig } from './models/form-config';
import { Schema } from './models/schema';

@Component({
  selector: 'lib-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() schema : Schema[];
  
  formConfig: FormConfig;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formConfig = this.formService.getFormConfig(this.schema);
  }

  submit() {
    console.log(this.formConfig.formGroup.value);
  }

}

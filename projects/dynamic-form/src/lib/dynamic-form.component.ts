import { Component, OnInit } from '@angular/core';
import { DynamicFormService } from './dynamic-form.service';

@Component({
  selector: 'lib-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

 // formConfig: FormConfig;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    // this.formConfig = this.formService.getFormConfig();
  }

  submit() {
    // console.log(this.formConfig.formGroup.value);
  }

}

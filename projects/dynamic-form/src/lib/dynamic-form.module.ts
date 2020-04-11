import { NgModule } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form.component';
import { DateControlComponent } from './components/dynamic-controls/date-control/date-control.component';
import { SelectControlComponent } from './components/dynamic-controls/select-control/select-control.component';
import { InputControlComponent } from './components/dynamic-controls/input-control/input-control.component';
import { LabelControlComponent } from './components/dynamic-controls/label-control/label-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicFormFieldComponent } from './components/dynamic-form-field/dynamic-form-field.component';

const exportComponent = [
  LabelControlComponent,
  InputControlComponent,
  SelectControlComponent,
  DateControlComponent
];
const component = [
  DynamicFormFieldComponent,
  DynamicFormComponent,
  ...exportComponent
]


@NgModule({
  declarations: [...component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [...component],
  entryComponents: [
    ...exportComponent
  ]
})
export class DynamicFormModule { }

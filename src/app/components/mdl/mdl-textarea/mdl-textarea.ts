import {
  Component,
  Input,
  Output,
  EventEmitter
}                          from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

import moment = require('moment');

/*
* from parent use double databing ([inputValue])="someVar"
*/

@Component({
  selector: 'mdl-textarea',
  directives: [...FORM_DIRECTIVES],
  template: `
  <div class="mdl-textfield mdl-js-textfield">
    <textarea
      class="mdl-textfield__input text-area__size"
      type="text"
      rows= "3"
      [ngModel]="inputValue"
      (ngModelChange)="handlesInputValueChanged($event)"
      [id]="textareaId">
    </textarea>
    <label
      class="mdl-textfield__label"
      [attr.for]="textareaId">
      {{ label }}
    </label>
  </div>
  `,
  styles: [`
    .text-area__size {
      min-width : 450px;
    }
  `]
})
export class MdlCheckTextareaComponent {
  @Input() label: string = '';
  @Input() inputValue: string = '';
  @Output() inputValueChange: EventEmitter<any> = new EventEmitter();

  private textareaId: string = moment().unix().toString(); // mdl needs unique ids on checkboxes
  public inputValue: string = '';

  public handlesInputValueChanged(newValue) {
    this.inputValue = newValue;
    this.inputValueChange.emit(newValue);
  }
}

import {
  Component,
  Input,
  Output,
  EventEmitter
}                 from '@angular/core';
import moment = require('moment');


@Component({
  selector: 'mdl-checkbox',
  template: `
  <label
    class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
    [attr.for]="checkBoxId">
    <input
      type="checkbox"
      [id]="checkBoxId"
      class="mdl-checkbox__input"
      [checked]="isChecked"
      (checkedChange)="onCheckChange($event)">
      <span class="mdl-checkbox__label">
        {{ checkBoxText }}
      </span>
  </label>
  `,
  styles: []
})
export class MdlCheckBoxComponent {
  @Input() isChecked: boolean = false;
  @Input() checkBoxId: string = '';
  @Output() isCheckedChange: EventEmitter<any> = new EventEmitter();
  @Input() checkBoxText: string = '';


  public onCheckChange(newValue): void {
    this.isChecked = newValue;
    this.isCheckedChange.emit(newValue);
  }
}

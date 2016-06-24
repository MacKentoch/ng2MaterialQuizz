import {
  Component,
  Input
}                 from '@angular/core';
import moment = require('moment');


@Component({
  selector: 'mdl-checkbox',
  template: `
  <label
    class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
    for="checkbox-1">
    <input
      type="checkbox"
      [id]="checkBoxId"
      class="mdl-checkbox__input"
      [checked]="isChecked">
      <span class="mdl-checkbox__label">
        {{ checkBoxText }}
      </span>
  </label>
  `,
  styles: []
})
export class MdlCheckBoxComponent {
  @Input() isChecked: boolean = false;
  @Input() checkBoxText: string = '';

  private checkBoxId: string = moment().unix().toString(); // mdl needs unique ids on checkboxes


  constructor() {
    // Do stuff
  }
}

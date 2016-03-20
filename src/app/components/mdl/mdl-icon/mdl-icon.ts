import {Component, Input} from 'angular2/core';

@Component({
  selector    : 'mdl-icon',
  template    : `
  <i class="material-icons">
    {{iconName}}
  </i>
  `,
  styles      : [`

  `],
  providers   : [],
  directives  : [],
})
export class MdlIcon {
  @Input() iconName: string = '';
  constructor() {
    // Do stuff
  }
}

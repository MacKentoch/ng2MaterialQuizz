import {Component, Input} from 'angular2/core';

@Component({
  selector    : '[mdl-tab-contents]',
  providers   : [],
  directives  : [],
  pipes       : [],
  template    : `
  <div
    class="mdl-tabs__panel"
    [class.is-active]="IsActive"
    [id]="tabContentRef">
    <ng-content></ng-content>
  </div>
  `,
  styles   : [``]
})
export class MdlTabContents {
  @Input() isActiveTab: boolean     = false;
  @Input() tabContentRef: string    = ''

  constructor() {
    // Do stuff
  }
}

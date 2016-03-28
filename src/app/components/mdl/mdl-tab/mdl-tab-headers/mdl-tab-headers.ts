import {Component, Input} from 'angular2/core';

@Component({
  selector    : '[mdl-tab-headers]',
  providers   : [],
  directives  : [],
  pipes       : [],
  template    : `
  <a
    [href]="refToTabContent"
    class="mdl-tabs__tab"
    [class.is-active]="IsActive">
    {{tabText}}
  </a>
  `,
  styles   : [``]
})
export class MdlTabHeaders {
  @Input() isActiveTab: boolean     = false;
  @Input() tabText: string          = '';
  @Input() tabContentRef: string    = ''

  constructor() {
    // Do stuff
  }
}

import {
  Directive,
  HostBinding,
  Input
}             from '@angular/core';

@Directive({
  selector: '[mdl-tab-headers]',
  // template: `
  // <a
  //   [href]="'#' + tabContentRef"
  //   class="mdl-tabs__tab"
  //   [class.is-active]="IsActive">
  //   {{tabText}}
  // </a>
  // `,
  // styles: [``]
})
export class MdlTabHeadersComponent {
  @Input() isActiveTab: boolean     = false;
  // @Input() tabText: string          = '';
  @Input() tabContentRef: string    = '';
  @HostBinding('class')
  public get tabHeaderClass() {
    return 'mdl-tabs__tab';
  }
  @HostBinding('class.is-active')
  public get tabHeaderActiveClass() {
    return this.isActiveTab;
  }

  constructor() {
    // Do stuff
  }
}

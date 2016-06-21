import {
  Directive,
  HostBinding,
  Input
}             from '@angular/core';

@Directive({
  selector: '[mdl-tab-headers]'
})
export class MdlTabHeadersComponent {
  @Input() isActiveTab: boolean     = false;
  @Input() tabContentRef: string    = '';

  @HostBinding('class')
  public get tabHeaderClass() {
    return 'mdl-tabs__tab';
  }
  @HostBinding('class.is-active')
  public get tabHeaderActiveClass() {
    return this.isActiveTab;
  }
  @HostBinding('href')
  public get tabHRef() {
    return `#${this.tabContentRef}`;
  }
  public set tabHRef(value: string) {
    this.tabContentRef = value;
  }

  constructor() {
    // Do stuff
  }
}

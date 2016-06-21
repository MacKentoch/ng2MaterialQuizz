import {
  Directive,
  Input,
  HostBinding
}             from '@angular/core';

@Directive({
  selector: '[mdl-tab-contents]'
})
export class MdlTabContentsComponent {
  @Input() isActiveTab: boolean     = false;
  @Input() tabContentRef: string    = '';

  @HostBinding('class')
  public get hostClass() {
    return 'mdl-tabs__panel';
  }
  @HostBinding('class.is-active')
  public get tabHeaderActiveClass() {
    return this.isActiveTab;
  }
  @HostBinding('id')
  public get tabId() {
    return this.tabContentRef;
  }
  public set tabId(value: string) {
    this.tabContentRef = value;
  }

  constructor() {
    // Do stuff
  }
}

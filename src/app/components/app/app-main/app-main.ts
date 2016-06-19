import {
  Component,
  HostBinding
}              from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <ng-content></ng-content>
  `
})
export class AppMainComponent {
  private _hostClasses: string = 'mdl-layout__content';

  @HostBinding('class')
  public get hostClasses() {
    return this._hostClasses;
  }

  constructor() {
    // Do stuff
  }
}

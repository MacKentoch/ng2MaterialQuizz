import {
  Component,
  HostBinding
}              from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `
})
export class AppMainComponent {
  private _appMainHostClasses: string = 'class="mdl-layout__content';
  
  @HostBinding('class')
  public get appMainHostClasses() {
    return this._appMainHostClasses;
  }

  constructor() {
    // Do stuff
  }
}

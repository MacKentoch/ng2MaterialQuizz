import {
  Component,
  Input
}             from '@angular/core';

@Component({
  selector: '[mdl-tab-contents]',
  template: `
  <div
    class="mdl-tabs__panel"
    [class.is-active]="IsActive"
    [id]="tabContentRef">
    <ng-content></ng-content>
  </div>
  `,
  styles: [``]
})
export class MdlTabContentsComponent {
  @Input() isActiveTab: boolean     = false;
  @Input() tabContentRef: string    = '';

  constructor() {
    // Do stuff
  }
}

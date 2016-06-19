import { Component } from '@angular/core';

@Component({
  selector: 'mdl-tab',
  template: `
  <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
    <div class="mdl-tabs__tab-bar">
      <ng-content select="[mdl-tab-headers]"></ng-content>
    </div>
    <ng-content select="[mdl-tab-contents]"></ng-content>
  </div>
  `,
  styles: [``]
})
export class MdlTabComponent {
  constructor() {
    // Do stuff
  }
}

import {Component} from '@angular/core';

@Component({
  selector: 'views-container',
  template: `
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      <ng-content></ng-content>
    </div>
  </div>
  `
})
export class ViewsContainer {

  constructor() {
    // Do stuff
  }
}

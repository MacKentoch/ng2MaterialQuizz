import { Component } from '@angular/core';

@Component({
  selector: 'mdl-paper',
  template: `
  <div
    class="mdl-shadow--2dp">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <ng-content></ng-content>
      </div>
    </div>
  </div>
  `,
  styles: [``]
})
export class MdlPaperComponent {
  constructor() {
    // Do stuff
  }
}

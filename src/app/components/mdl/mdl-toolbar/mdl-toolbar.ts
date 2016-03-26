import {Component, Input} from 'angular2/core';

@Component({
  selector    : 'mdl-toolbar',
  template    : `
  <div
    class="toolbarStyle mdl-shadow--2dp"
    [style.color]="toolbarColor"
    [style.backgroundColor]="toolbarBackgroundColor">
    <ng-content></ng-content>
  </div>
  `,
  styles      : [`
    .toolbarStyle {
      box-sizing  : border-box;
      position    : relative;
      height      : 64px;
      width       : 100%;
      padding     : 16px;
    }
  `],
  providers   : [],
  directives  : [],
  pipes       : []
})
export class MdlToolbar {
  @Input() toolbarColor: string            = '#fff';
  @Input() toolbarBackgroundColor: string  = '#3F51B5';

  constructor() {
    // Do stuff
  }
}

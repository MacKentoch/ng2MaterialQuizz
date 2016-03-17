import {Component} from 'angular2/core';

@Component({
  selector    : 'app-layout',
  template    : `
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
              mdl-layout--fixed-header">
    <ng-content select=header></ng-content>
    <ng-content select=drawer></ng-content>
    <ng-content select=main></ng-content>
    <ng-content select=footer></ng-content>
  </div>
  `,
  styles   : [require('./app-layout.scss')]
})
export class AppLayout {
  constructor() {

  }
}

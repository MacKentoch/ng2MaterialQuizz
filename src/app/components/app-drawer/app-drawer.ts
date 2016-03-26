import {Component, Input}   from 'angular2/core';
import {MdlIcon}            from '../mdl/mdl';
import {TranslatePipe}      from 'ng2-translate/ng2-translate';
import {ROUTER_DIRECTIVES}  from 'angular2/router';

@Component({
  selector    : 'app-drawer',
  template    : `
  <span class="mdl-layout-title">
    {{drawerTitle}}
  </span>
  <nav class="mdl-navigation">
    <a
      class="mdl-navigation__link navItem"
      style="display : flex !important; flex-direction  : row; align-items     : center;"
      [routerLink]="[menu.routeName]"
      *ngFor="#menu of drawerModel; #i = index">
      <i
        class="material-icons menuItemIcon navItemIcon"
        style="margin-right:24px;">
        {{menu.mdlIconName}}
      </i>
      {{menu.translate_id | translate}}
    </a>
  </nav>
  `,
  styleUrls   : [require('./app-drawer.scss')],
  providers   : [],
  directives  : [ROUTER_DIRECTIVES, MdlIcon],
  pipes       : [TranslatePipe]
})
export class AppDrawer {
  @Input() drawerTitle: string  = '';
  @Input() drawerModel: any     = {};

  constructor() {
    // Do stuff
  }
}

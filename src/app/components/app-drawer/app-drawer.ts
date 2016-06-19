import {
  Component,
  Input,
  HostBinding,
  // trigger,
  // state,
  // style,
  // transition,
  // animate
}                           from '@angular/core';
import {MdlIcon}            from '../mdl/mdl';
import {TranslatePipe}      from 'ng2-translate/ng2-translate';
import {ROUTER_DIRECTIVES}  from '@angular/router-deprecated';

@Component({
  selector:   'app-drawer',
  directives: [ROUTER_DIRECTIVES, MdlIcon],
  pipes:      [TranslatePipe],
  template: `
  <span class="mdl-layout-title">
    {{drawerTitle}}
  </span>
  <nav class="mdl-navigation">
    <a
      class="mdl-navigation__link navItem"
      style="display : flex !important; flex-direction  : row; align-items     : center;"
      [routerLink]="[menu.routeName]"
      *ngFor="let menu of drawerModel; let i = index">
      <i
        class="material-icons menuItemIcon navItemIcon"
        style="margin-right:24px;">
        {{menu.mdlIconName}}
      </i>
      {{menu.translate_id | translate}}
    </a>
  </nav>
  `,
  styleUrls:  [require('./app-drawer.scss')]
})
export class AppDrawer {
  @Input() drawerTitle: string  = '';
  @Input() drawerModel: any     = {};

  private _hostClass = 'mdl-layout__drawer';

  @HostBinding('class')
  get hostClass(): string {
    return this._hostClass;
  }
  set hostClass(value: string) {
    if (value !== this._hostClass) {
      this._hostClass = value;
    }
  }

  constructor() {
    // Do stuff
  }
}

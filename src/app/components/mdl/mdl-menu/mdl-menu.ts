import {Component, Input} from 'angular2/core';
import {MdlIcon}          from '../mdl-icon/mdl-icon';
import {TranslatePipe}    from 'ng2-translate/ng2-translate';

@Component({
  selector    : 'mdl-menu',
  template    : `
  <button
    id="demo-menu-lower-right"
    class="mdl-button mdl-js-button mdl-button--icon">
    <i class="material-icons">
      more_vert
    </i>
  </button>
  <ul
    class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
    for="demo-menu-lower-right">
    <li
      class="mdl-menu__item"
      *ngFor="#item of items; #i = index">
      <mdl-icon iconName="item.iconName"></mdl-icon>
      {{item.translate_id}}
    </li>
  </ul>
  `,
  styles      : [`

  `],
  providers   : [],
  directives  : [],
  pipes : []
})
export class MdlMenu {
  @Input() menuItems: Array<any>;
  @Input() shouldTranslate: boolean = true;
  
  constructor() {
    // Do stuff
  }
}

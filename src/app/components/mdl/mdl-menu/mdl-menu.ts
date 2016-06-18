import {
  Component,
  Input,
  Output,
  EventEmitter
}                         from '@angular/core';
import {MdlIcon}          from '../mdl-icon/mdl-icon';
import {TranslatePipe}    from 'ng2-translate/ng2-translate';

@Component({
  selector: 'mdl-menu',
  directives: [MdlIcon],
  pipes: [TranslatePipe],
  template: `
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
      class="mdl-menu__item mdl-js-ripple-effect menuItem"
      *ngFor="#menu of menuItems; #i = index"
      (click)="handleMenuSelected(i, menu)">
      <i
        class="material-icons menuItemIcon">
        {{menu.iconName}}
      </i>
      <span class="menuTextSpan">
        {{shouldTranslate ? (menu.translate_id | translate) : menu.text}}
      </span>
    </li>
  </ul>
  `,
  styles: [`
    .menuItem {
      display         : flex;
      flex-direction  : row;
      align-items     : center;
      font-weight     : 500;
    }
    .menuItemIcon {
      font-size  : 24px;
    }
    .menuTextSpan {
      margin-left   : 20px;
      margin-right  : 20px;
    }
  `]
})
export class MdlMenu {
  @Input() menuItems: Array<any>            = [];
  @Input() shouldTranslate: boolean         = true;
  @Output() menuSelected: EventEmitter<any> = new EventEmitter();

  constructor() {
    // Do stuff
    // console.info('MdlMenu loading');
  }

  handleMenuSelected(index, menu) {
    if (menu.isLink) {
      window.location.href = menu.href;
    } else {
      this.menuSelected.emit(index);
    }
  }
}

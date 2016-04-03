import {
  Component,
  Input,
  Output,
  EventEmitter
}                                     from 'angular2/core';
import {MdlIcon, MdlMenu}             from '../mdl/mdl';

@Component({
  selector    : 'app-header',
  directives  : [MdlIcon, MdlMenu],
  template    : `
  <header>
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">
        {{title}}
      </span>
      <div class="mdl-layout-spacer"></div>
      <mdl-menu
        [menuItems]="menuRightModel"
        (menuSelected)=handleMenuSelected($event)>
      </mdl-menu>
    </div>
  </header>
  `,
  styles   : [``]
})
export class AppHeader  {
  @Input() menuRightModel: any    = [];
  @Input() menuSelected: number;
  @Output() menuRightItemSelected: EventEmitter<any> = new EventEmitter();

  public title: string            = '';
  public menuId: string           = 'navBarTopRightMenu';
  public shouldTranslate: boolean = true;

  public testObj: any;

  constructor() {
    // Do stuff
  }

  handleMenuSelected(newValue) {
    this.menuRightItemSelected.emit(newValue);
  }
}

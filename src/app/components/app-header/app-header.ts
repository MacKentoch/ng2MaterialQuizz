import {Component, Input, OnChanges, SimpleChange}  from 'angular2/core';
import {MdlIcon, MdlMenu}                           from '../mdl/mdl';

@Component({
  selector    : 'app-header',
  template    : `
  <header>
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">
        {{title}}
      </span>
      <div class="mdl-layout-spacer"></div>
      <mdl-menu
        [menuItems]="menuRightModel">
      </mdl-menu>
    </div>
  </header>
  `,
  styleUrls   : [require('./app-header.scss')],
  providers   : [],
  directives  : [MdlIcon, MdlMenu],
  pipes       : []
})
export class AppHeader implements OnChanges  {
  @Input() menuRightModel: any    = [];

  public title: string            = '';
  public menuId: string           = 'navBarTopRightMenu';
  public shouldTranslate: boolean = true;

  constructor() {
    // Do stuff
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    // console.log(`AppHeader ngOnChanges - menuRightModel = ${changes['menuRightModel'].currentValue}`);
    // console.dir(changes['menuRightModel'].currentValue);
  }
}

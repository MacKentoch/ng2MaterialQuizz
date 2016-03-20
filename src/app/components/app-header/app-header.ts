import {Component, Input} from 'angular2/core';
import {MdlIcon}          from '../mdl/mdl';

@Component({
  selector    : 'app-header',
  template    : `
  <header>
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">
        {{title}}
      </span>
      <div class="mdl-layout-spacer"></div>
      <button id="demo-menu-lower-right"
              class="mdl-button mdl-js-button mdl-button--icon">
        <i class="material-icons">more_vert</i>
      </button>
      <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
          for="demo-menu-lower-right">
        <li class="mdl-menu__item">
          <mdl-icon iconName="language"></mdl-icon>
          language
        </li>
        <li class="mdl-menu__item">
          <mdl-icon iconName="web"></mdl-icon>
          github
        </li>
      </ul>
    </div>
  </header>
  `,
  styleUrls   : [require('./app-header.scss')],
  providers   : [],
  directives  : [MdlIcon],
  pipes       : []
})
export class AppHeader {
  @Input() menuRightModel: any;
  public title: string   = 'ng2MaterialQuizz';
  public menuId: string  = 'navBarTopRightMenu';

  constructor() {
    // Do stuff
  }
}

import {Component, Input} from 'angular2/core';

@Component({
  selector    : 'app-header',
  template    : `
  <header>
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title">
        {{title}}
      </span>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>

      <!-- Right aligned menu below button -->
      <button id="demo-menu-lower-right"
              class="mdl-button mdl-js-button mdl-button--icon">
        <i class="material-icons">more_vert</i>
      </button>
      <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
          for="demo-menu-lower-right">
        <li class="mdl-menu__item">Some Action</li>
        <li class="mdl-menu__item">Another Action</li>
        <li disabled class="mdl-menu__item">Disabled Action</li>
        <li class="mdl-menu__item">Yet Another Action</li>
      </ul>

    </div>
  </header>
  `,
  styleUrls   : [require('./app-header.scss')],
  providers   : [],
  directives  : [],
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

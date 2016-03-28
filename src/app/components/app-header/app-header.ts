import {
  Component,
  Input,
  Output,
  OnChanges,
  SimpleChange,
  EventEmitter
}                                     from 'angular2/core';
import {MdlIcon, MdlMenu}             from '../mdl/mdl';

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
  @Input() menuSelected: number;
  @Output() menuRightItemSelected: EventEmitter<any> = new EventEmitter();

  public title: string            = '';
  public menuId: string           = 'navBarTopRightMenu';
  public shouldTranslate: boolean = true;

  constructor() {
    // Do stuff
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    if (!changes['menuSelected'].isFirstChange) {
      if (changes['menuSelected'].previousValue !== changes['menuSelected'].currentValue) {
        const idMenu = changes['menuSelected'].currentValue;
        this.menuRightItemSelected.emit({menu: idMenu});
      }
    }
  }
}

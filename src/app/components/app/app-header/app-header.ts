import {
  Component,
  Input,
  Output,
  HostBinding,
  EventEmitter
}                       from '@angular/core';
import {
  MdlIconComponent,
  MdlMenuComponent
}                       from '../../mdl/mdl';

@Component({
  selector:   'app-header',
  directives: [MdlIconComponent, MdlMenuComponent],
  template: `
  <header>
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">
        {{ title }}
      </span>
      <div class="mdl-layout-spacer"></div>
      <mdl-menu
        [menuItems]="menuRightModel"
        (menuSelected)=handleMenuSelected($event)>
      </mdl-menu>
    </div>
  </header>
  `,
  styles: [``]
})
export class AppHeaderComponent  {
  @Input() menuRightModel: any    = [];
  @Input() menuSelected: number;
  @Output() menuRightItemSelected: EventEmitter<any> = new EventEmitter();

  private _hostClass = 'mdl-layout__header';

  @HostBinding('class')
  get hostClass(): string {
    return this._hostClass;
  }
  set hostClass(value: string) {
    if (value !== this._hostClass) {
      this._hostClass = value;
    }
  }

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

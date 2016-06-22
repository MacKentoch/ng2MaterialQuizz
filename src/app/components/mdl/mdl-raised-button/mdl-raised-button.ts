import {
  Directive,
  HostBinding,
  Input,
  ElementRef
}           from '@angular/core';


/*
* @Input('mdlButtonRipple'): boolean
* @Input('mdlButtonColor'): string => oneOf ['none', 'colored', 'accent']
*/
@Directive({
  selector: '[mdlRaisedButton]'
})
export class MdlRaisedButtonDirective {
  private _hostClass = 'mdl-button mdl-js-button mdl-button--raised';

  @Input() mdlButtonColor: string;
  @Input() mdlButtonRipple: boolean;

  @HostBinding('class')
  public get hostClass() {
    return this._hostClass;
  }

  @HostBinding('class.mdl-js-ripple-effect')
  public get buttonRipple() {
    if (this.mdlButtonRipple === true) {
      return true;
    }
    return false;
  }

  @HostBinding('class.mdl-button--colored')
  public get buttonColor() {
    if (this.mdlButtonColor === 'colored') {
      return true;
    }
    return false;
  }

  @HostBinding('class.mdl-button--accent')
  public get buttonAccent() {
    if (this.mdlButtonColor === 'accent') {
      return true;
    }
    return false;
  }

}

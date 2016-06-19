import {
  Component,
  Input
}                 from '@angular/core';

@Component({
  selector: 'ui-margin-top',
  template: `
  <div [style.margin-top]="marginTop"></div>
  `
})
export class UiMarginTopComponent  {
  @Input() marginTop:  string = '80px';

  constructor() {
    // Nothing for now, maybe later? :-)
  }
}

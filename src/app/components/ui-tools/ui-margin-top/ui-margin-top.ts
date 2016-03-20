import {Component, Input, OnInit, OnChanges, SimpleChange} from 'angular2/core';

@Component({
  selector    : 'ui-margin-top',
  template    : `
  <div [style.margin-top]="marginTop"></div>
  `
})
export class UiMarginTop implements OnInit, OnChanges {
  @Input() marginTop:  string = '80px';

  constructor() {
    // Nothing for now, maybe later? :-)
  }

  ngOnInit() {
    //Nothing for now, maybe later? :-)
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    console.log('UiMarginTop ngOnChanges - marginTop = ' + changes['marginTop'].currentValue);
  }

}

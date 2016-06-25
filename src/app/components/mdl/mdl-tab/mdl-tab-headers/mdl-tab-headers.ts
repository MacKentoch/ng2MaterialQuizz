import {
  Directive,
  HostBinding,
  HostListener,
  EventEmitter,
  Input,
  Output,
  AfterViewInit
}             from '@angular/core';

declare const componentHandler: any;

@Directive({
  selector: '[mdl-tab-headers]'
})
export class MdlTabHeadersComponent implements AfterViewInit {
  @Input() isActiveTab: boolean     = false;
  @Input() tabContentRef: string    = '';
  @Output() onTabClick: EventEmitter<any> = new EventEmitter();

  @HostBinding('class')
  public get tabHeaderClass() {
    return 'mdl-tabs__tab';
  }
  @HostBinding('class.is-active')
  public get tabHeaderActiveClass() {
    return this.isActiveTab;
  }
  @HostBinding('href')
  public get tabHRef() {
    // return `#tab-${this.tabContentRef}`;
    return `#tab-${this.tabContentRef}`;
  }
  public set tabHRef(value: string) {
    this.tabContentRef = value;
  }

  @HostListener('click', ['$event.target'])
  public onTabHeaderClick(event): void {
    console.log('onTabHeaderClick: ', {tabRef: this.tabContentRef});
   this.onTabClick.emit({tabRef: this.tabContentRef})
  }

  constructor() {
    // Do stuff
  }
  
  ngAfterViewInit(): void {
    componentHandler.upgradeDom();
  }
}

import {
  Component,
  AfterViewChecked,
  HostBinding
}                         from '@angular/core';
import { getViewAnimations } from '../../services';

@Component({
  selector: 'views-container',
  template: `
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      <ng-content></ng-content>
    </div>
  </div>
  `
})
export class ViewsContainer implements AfterViewChecked {
  private _hostClasses = getViewAnimations().beforeViewEnter;

  @HostBinding('class')
  public get hostClass(): string {
    return this._hostClasses;
  }
  public set hostClass(value: string) {
    if (value !== this._hostClasses) {
      this._hostClasses = value;
    }
  }

  constructor() {
    // Do stuff
  }

  // ngAfterContentInit() {
  //   this.setEnterViewAnimationClasses();
  // }

  ngAfterViewChecked() {
    this.setEnterViewAnimationClasses();
  }

  private setEnterViewAnimationClasses(): void {
    if (this.hostClass === getViewAnimations().beforeViewEnter) {
      this.hostClass = getViewAnimations().afterViewEnter;
    }
  }
}

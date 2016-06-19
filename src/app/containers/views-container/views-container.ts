import {
  Component,
  AfterContentInit,
  HostBinding
}                             from '@angular/core';
import { getViewAnimations }  from '../../services';


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
export class ViewsContainer implements AfterContentInit {
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

  ngAfterContentInit() {
    // does not work! Please forget about this way to animate view
    // just wait for better examples for animating view during route
    this.setEnterViewAnimationClasses();
  }

  private setEnterViewAnimationClasses(): void {
    if (this.hostClass === getViewAnimations().beforeViewEnter) {
      setTimeout(() => this.hostClass = getViewAnimations().afterViewEnter );
    }
  }
}

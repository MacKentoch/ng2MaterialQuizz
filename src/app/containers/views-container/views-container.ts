import {
  Component,
  OnInit,
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
export class ViewsContainer implements OnInit {
  private _hostClasses = getViewAnimations().beforeViewEnter;

  @HostBinding('class')
  get hostClass(): string {
    return this._hostClasses;
  }
  set hostClass(value: string) {
    if (value !== this._hostClasses) {
      this._hostClasses = value;
    }
  }

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    this.setEnterViewAnimationClasses();
  }

  private setEnterViewAnimationClasses(): void {
    this._hostClasses = getViewAnimations().afterViewEnter;
  }
}

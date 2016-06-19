import {
  Component,
  AfterContentInit
}                             from '@angular/core';
import {
  NgClass
}                             from '@angular/common';


@Component({
  selector: 'views-container',
  template: `
  <div [ngClass]="{'animatedView': isAnimated, 'invisible': !isViewEntered, 'view-enter': isViewEntered}">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <ng-content></ng-content>
      </div>
    </div>
  </div>
  `,
  directives: [NgClass]
})
export class ViewsContainerComponent implements AfterContentInit {
  private isAnimated: boolean = true;
  private isViewEntered: boolean = false;

  constructor() {
    this.isAnimated = true;
  }

  ngAfterContentInit() {
    this.setEnterViewAnimationClasses();
  }

  private setEnterViewAnimationClasses(): void {
    if (!this.isViewEntered) {
      this.isViewEntered = true;
    }
  }
}

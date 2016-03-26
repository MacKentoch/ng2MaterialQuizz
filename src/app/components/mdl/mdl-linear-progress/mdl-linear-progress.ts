import {Component, Input, ElementRef, OnInit} from 'angular2/core';

@Component({
  selector    : 'mdl-linear-progress',
  template    : `
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      <div
        id="progessBar"
        class="mdl-progress mdl-js-progress">
      </div>
    </div>
  </div>
  `,
  styles      : [`
  `],
  providers   : [],
  directives  : [],
  pipes       : []
})
export class MdlLinearProgress implements OnInit {
  @Input() currentProgress: number     = 0;

  private progressBarEl: any;

  constructor(element : ElementRef) {
    // Do stuff
    this.progressBarEl = element.nativeElement.querySelector('#progessBar');
  }

  ngOnInit() {
    console.info('progressBarEl');
    console.dir(this.progressBarEl);
  }

  setProgress() {
    //this.progessBar.MaterialProgress.setProgress(currentProgress);
  }


}

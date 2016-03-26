import {Component, Input, ViewChild, AfterViewInit} from 'angular2/core';

@Component({
  selector    : 'mdl-linear-progress',
  template    : `
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      <div
        #ProgBar
        class="mdl-progress mdl-js-progress progBarCustom">
      </div>
    </div>
  </div>
  `,
  styles      : [`
    .progBarCustom {
      width: 100%;
    }
  `],
  providers   : [],
  directives  : [],
  pipes       : []
})
export class MdlLinearProgress implements AfterViewInit {
  @Input() currentProgress: number     = 0;
  @ViewChild('ProgBar') ProgBar; // access DOM element by ref : #

  constructor() {
    //do stuff
  }

  updateProgress() {
    this.ProgBar.nativeElement.MaterialProgress.setProgress(this.currentProgress);
  }

  ngAfterViewInit() {
    // DOM element ready to access here
    this.ProgBar.nativeElement.addEventListener('mdl-componentupgraded', function() {
      this.MaterialProgress.setProgress(50);
     });

    /// this.ProgBar.nativeElement.MaterialProgress.setProgress(0);
  }
}

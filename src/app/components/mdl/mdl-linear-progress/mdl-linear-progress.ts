import {Component, Input, ViewChild, AfterViewInit} from 'angular2/core';

@Component({
  selector    : 'mdl-linear-progress',
  template    : `
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      <div
        id="progessBar"
        #ProgBar
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
export class MdlLinearProgress implements AfterViewInit{
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
    console.dir(this.ProgBar.nativeElement);

    this.ProgBar.nativeElement.addEventListener('mdl-componentupgraded', () => {
       this.ProgBar.nativeElement.MaterialProgress.setProgress(this.currentProgress);
     });
        
    this.ProgBar.nativeElement.MaterialProgress.setProgress(0);
  }
}

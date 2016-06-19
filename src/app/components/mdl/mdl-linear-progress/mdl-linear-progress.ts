import {
  Component,
  Input,
  ViewChild,
  AfterViewInit,
  OnChanges,
  SimpleChange
}                 from '@angular/core';

@Component({
  selector: 'mdl-linear-progress',
  template: `
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      <div
        #ProgBar
        class="mdl-progress mdl-js-progress progBarCustom">
      </div>
    </div>
  </div>
  `,
  styles: [`
    .progBarCustom {
      width: 100%;
    }
  `]
})
export class MdlLinearProgressComponent implements AfterViewInit, OnChanges {
  @Input() currentProgress: number = 0;  // by default initial progress to 0%
  @ViewChild('ProgBar') ProgBar;          // access DOM element by ref : #

  // need to wait mdl-componentupgraded event done before using el.MaterialProgress.setProgress
  private mdlProgressInitDone: boolean = false;

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    if (changes['currentProgress'].currentValue !== changes['currentProgress'].previousValue) {
      // to be able to use MaterialProgress.setProgress() be sure mdl-componentupgraded has already triggered!!!
      if (this.mdlProgressInitDone) {
        this.updateProgress();
      }
    }
  }

  ngAfterViewInit() {
    const self = this;
    this.ProgBar.nativeElement.addEventListener('mdl-componentupgraded', function() {
      this.MaterialProgress.setProgress(0);
      self.mdlProgressInitDone = true;
    });
  }

  updateProgress(): void {
    this.ProgBar.nativeElement.MaterialProgress.setProgress(this.currentProgress);
  }
}

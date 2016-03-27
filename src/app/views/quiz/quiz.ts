import {Component, OnInit, AfterViewInit}  from 'angular2/core';
import {FORM_DIRECTIVES}      from 'angular2/common';
import {ViewsContainer}       from '../../containers/views-container/views-container';
import {
  MdlPaper,
  MdlToolbar,
  MdlLinearProgress
}                             from '../../components/mdl/mdl';
import {UiMarginTop}          from '../../components/ui-tools/ui-tools.ts';
import {TranslatePipe}        from 'ng2-translate/ng2-translate';

@Component({
  selector    : 'home',
  template    : `
  <views-container>
    <mdl-linear-progress
      [currentProgress]="currentProgressValue">
    </mdl-linear-progress>
    <mdl-toolbar
      toolbarColor="#fff"
      toolbarBackgroundColor="#3F51B5">
      <span class="mdl-layout-title">
        Quiz
      </span>
      <div class="mdl-layout-spacer"></div>
    </mdl-toolbar>
    <mdl-paper>
      <h3>
        Quiz view here
      </h3>
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--6">
          <button
            class="mdl-button mdl-js-button mdl-button--raised"
            (click)="minusTen()">
            -10%
          </button>
          <button
            class="mdl-button mdl-js-button mdl-button--raised"
            (click)="plusTen()">
            +10%
          </button>
        </div>
        <div class="mdl-cell mdl-cell--6">
          currentProgressValue : {{currentProgressValue}}
        </div>
      </div>
    </mdl-paper>
  </views-container>
  `,
  styles: [`
  `],
  providers   : [],
  directives  : [ViewsContainer, MdlPaper, MdlToolbar, MdlLinearProgress, UiMarginTop, ...FORM_DIRECTIVES],
  pipes       : [TranslatePipe]
})
export class Quiz implements OnInit, AfterViewInit {
  //public HomeViewAnimationClass:string    = 'animated hidden'; no animation support in angular2 beta : animating route views is not possible yet
  public titleOneAnimationClass: string   = 'animated hidden';
  public titleTwoAnimationClass: string   = 'homeDetailsClasses hidden';
  public currentProgressValue: number     = 0;

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Quiz');
  }

  ngAfterViewInit() {
    //to add somethig some day ^^
  }

  minusTen() {
    this.currentProgressValue = (this.currentProgressValue - 10) > 0 ? (this.currentProgressValue - 10) : 0 ;
  }

  plusTen() {
    this.currentProgressValue = (this.currentProgressValue + 10) <= 100 ? (this.currentProgressValue + 10) : 100 ;
  }

}

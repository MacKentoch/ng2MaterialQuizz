import {
  Component,
  OnInit,
  AfterViewInit
}                               from '@angular/core';
import { FORM_DIRECTIVES }      from '@angular/common';
import {
  ViewsContainerComponent
}                               from '../../containers';
import { MDL_DIRECTIVES }       from '../../components/mdl/mdl';
import { UiMarginTopComponent } from '../../components/ui-tools';
import {TranslatePipe}          from 'ng2-translate/ng2-translate';

// const QUIZ_MODEL = require('../../models/quiz-model.init.json');

@Component({
  selector:   'quiz',
  providers:  [],
  directives: [ViewsContainerComponent, ...MDL_DIRECTIVES, UiMarginTopComponent, ...FORM_DIRECTIVES],
  pipes:      [TranslatePipe],
  template: `
  <views-container>
    <mdl-linear-progress
      class="marginMdlLinearProgress"
      [currentProgress]="currentProgressValue">
    </mdl-linear-progress>
    <ui-margin-top
      marginTop="30px">
    </ui-margin-top>
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

      <mdl-tab>

        <a mdl-tab-headers
          [isActiveTab]="firstTabIsActive"
          [tabContentRef]="firstTabContentRef">
          {{ firstTabHeaderText }}
        </a>
        <a mdl-tab-headers
          [isActiveTab]="secondTabNotActive"
          [tabContentRef]="secondTabContentRef">
          {{ secondTabHeaderText }}
        </a>


        <div mdl-tab-contents
          class="tabContentSizing"
          [isActiveTab]="firstTabIsActive"
          [tabContentRef]="firstTabContentRef">
          <span>
            1st TAB CONTENT HERE
          </span>
        </div>

        <div mdl-tab-contents
          class="tabContentSizing"
          [isActiveTab]="secondTabIsActive"
          [tabContentRef]="secondTabContentRef">
          <span>
            2nd TAB CONTENT HERE
          </span>
        </div>

      </mdl-tab>



    </mdl-paper>
  </views-container>
  `,
  styles: [`
    .marginMdlLinearProgress {
      margin-bottom: 20px;
    }
    .tabContentSizing {
      height: 300px;
    }
  `]
})
export class QuizComponent implements OnInit, AfterViewInit {
  public titleOneAnimationClass: string   = 'animated hidden';
  public titleTwoAnimationClass: string   = 'homeDetailsClasses hidden';

  public firstTabIsActive: boolean   = true;
  public secondabIsActive: boolean   = false;

  public firstTabHeaderText: string  = 'first tab';
  public firstTabContentRef: string  = 'firstTabRef';
  public secondTabHeaderText: string = 'second tab';
  public secondTabContentRef: string = 'secondTabRef';

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    // console.log('Hello Quiz');
  }

  ngAfterViewInit() {
    // to add somethig some day ^^
  }
}

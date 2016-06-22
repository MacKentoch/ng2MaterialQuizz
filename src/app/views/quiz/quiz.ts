import {
  Component,
  AfterViewInit
}                               from '@angular/core';
import { FORM_DIRECTIVES }      from '@angular/common';
import {
  ViewsContainerComponent
}                               from '../../containers';
import { MDL_DIRECTIVES }       from '../../components/mdl/mdl';
import { QUIZ_COMPONENTS }      from '../../components/quiz';
import { UiMarginTopComponent } from '../../components/ui-tools';
import {TranslatePipe}          from 'ng2-translate/ng2-translate';
import { AppStateService }      from '../../services';

declare const componentHandler: any;

@Component({
  selector:   'quiz',
  providers:  [AppStateService],
  directives: [ViewsContainerComponent, ...MDL_DIRECTIVES, UiMarginTopComponent, ...FORM_DIRECTIVES, ...QUIZ_COMPONENTS],
  pipes:      [TranslatePipe],
  template: `
  <views-container>

    <mdl-linear-progress
      *ngIf="appState.quizQuestionIndex >= 0"
      class="marginMdlLinearProgress"
      [currentProgress]="currentProgressValue">
    </mdl-linear-progress>

    <ui-margin-top
      marginTop="10px">
    </ui-margin-top>

    <quiz-intro
      *ngIf="appState.quizQuestionIndex < 0"
      [subtitle]="appState.quizIntro.content_1_translate_id"
      [body]="appState.quizIntro.content_2_translate_id"
      [goBtnText]="appState.quizIntro.go_button_text_id"
      (onStartQuizClick)="handlesOnStartQuizClick($event)">
    </quiz-intro>

    <div *ngIf="appState.quizQuestionIndex >= 0">
      <mdl-toolbar
        toolbarColor="#fff"
        toolbarBackgroundColor="#3F51B5">
        <span class="mdl-layout-title">
          {{ 'QUIZZ_WORD' | translate }}
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
            <button
              mdlRaisedButton
              mdlButtonColor="colored"
              [mdlButtonRipple]="buttonRippleEffect">
              mdl raised button
            </button>
          </div>

        </mdl-tab>


      </mdl-paper>
    </div>

  </views-container>
  `,
  styles: [`
    .marginMdlLinearProgress {
      margin-bottom: 10px;
    }
    .tabContentSizing {
      height: 300px;
    }
  `]
})
export class QuizComponent implements AfterViewInit {
  public titleOneAnimationClass: string   = 'animated hidden';
  public titleTwoAnimationClass: string   = 'homeDetailsClasses hidden';

  public firstTabIsActive: boolean   = true;
  public secondabIsActive: boolean   = false;

  public firstTabHeaderText: string  = 'first tab';
  public firstTabContentRef: string  = 'firstTabRef';
  public secondTabHeaderText: string = 'second tab';
  public secondTabContentRef: string = 'secondTabRef';

  public currentProgressValue: number = 0;

  public buttonRippleEffect: boolean = true;


  constructor(public appState: AppStateService) {
    // Do stuff
    this.appState = appState;
    this.appState.setQuizStarted();
  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  handlesOnStartQuizClick(event: any): void {
    if (event && event.quizStart) {
      this.appState.goNextQuestion();
      this.setProgress(this.appState.getPourcentageDone())
    }
  }



  public setProgress(percentage: number): void {
    this.currentProgressValue = percentage;
  }
}

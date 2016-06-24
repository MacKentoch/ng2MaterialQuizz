import {
  Component,
  Input,
  Output,
  AfterViewInit,
  EventEmitter
}                   from '@angular/core';
import {
  NgClass,
  NgFor
}                   from '@angular/common';
import {
  Iquestion,
  Ichoice
}                         from '../../../services/quiz-model/quiz-model';
import { MDL_DIRECTIVES } from '../../mdl/mdl';
import { TranslatePipe }  from 'ng2-translate/ng2-translate';

declare const componentHandler: any;

@Component({
  selector:   'quiz-questions',
  directives: [NgFor, NgClass, ...MDL_DIRECTIVES],
  pipes:      [TranslatePipe],
  template: `
  <mdl-paper>
    <h3>
      {{ questionModel[currentQuestionIndex].Q_translate_id | translate }}
    </h3>

    <mdl-tab>
      <a
        *ngFor="let header of questionModel; let qestionIdx = index"
        mdl-tab-headers
        [isActiveTab]="currentQuestionIndex === qestionIdx"
        [tabContentRef]="questionModel[qestionIdx].number">
        {{ questionModel[qestionIdx].Q_translate_id | translate }}
      </a>


      <div
        *ngFor="let questionContent of questionModel; let questionContentIdx = index; let firstQuestion = first;"
        mdl-tab-contents
        class="tabContentSizing"
        [isActiveTab]="currentQuestionIndex === questionContentIdx"
        [tabContentRef]="questionModel[questionContentIdx].number">

        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--2-col"></div>
          <div class="mdl-cell mdl-cell--8-col">
            <h3>
              {{ questionContent.Q_translate_id | translate }}
            </h3>
          </div>
          <div class="mdl-cell mdl-cell--2-col"></div>
        </div>

        <div
          *ngFor="let choice of questionContent.liste_choix; let choixIdx = index;">
          <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--2-col"></div>
            <div class="mdl-cell mdl-cell--8-col">
                <mdl-checkbox
                  class="inputRow"
                  *ngIf="choice.type === 'checkbox'"
                  [checkBoxId]="'checkbox-' + choice.choiceId"
                  [isChecked]="choice.saisie"
                  [checkBoxText]="choice.translateId | translate">
                </mdl-checkbox>
                <mdl-textarea
                  class="inputRow"
                  *ngIf="choice.type === 'textarea'"
                  ([inputValue])="choice.saisie"
                  [label]="choice.translateId | translate">
                </mdl-textarea>
              </div>
              <div class="mdl-cell mdl-cell--2-col"></div>
            </div>
          </div>


        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--2-col"></div>
          <div class="mdl-cell mdl-cell--8-col">
            <span class="minMaxQuestionRule">
              {{ 'QUIZZ_RULE_MIN_ANSWER' | translate }} : {{ questionContent.min_choices }} - {{ 'QUIZZ_RULE_MAX_ANSWER' | translate }} : {{ questionContent.max_choices }}
            </span>
          </div>
          <div class="mdl-cell mdl-cell--2-col"></div>
        </div>

        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--2-col"></div>
          <div class="mdl-cell mdl-cell--8-col">
            <button
              *ngIf="!firstQuestion"
              mdlRaisedButton
              mdlButtonColor="accent"
              [mdlButtonRipple]="buttonRippleEffect"
              (click)="goPreviousQuestion({fromQuestionIdx: questionContentIdx})">
              {{ backButtonText | translate }}
            </button>
            <button
              mdlRaisedButton
              mdlButtonColor="accent"
              [mdlButtonRipple]="buttonRippleEffect"
              (click)="goNextQuestion({fromQuestionIdx: questionContentIdx})">
              {{ nextButtonText | translate}}
            </button>
          </div>
          <div class="mdl-cell mdl-cell--2-col"></div>
        </div>
      </div>

    </mdl-tab>

  </mdl-paper>
  `,
  styles   : [`
    .minMaxQuestionRule {
      margin-top: 25px;
      font-size: 10px;
    }

    .inputRow {
      margin-top: 10px;
      margin-bottom: 10px;
      margin-left: 10px;
      margin-right: 10px;
    }
  `]
})
export class QuizQuestionsComponent implements AfterViewInit {
  @Input() currentQuestionIndex: number;
  @Input() questionModel: Array<any>;
  @Input() questionsLength: number;
  @Input() backButtonText: string;
  @Input() nextButtonText: string;
  @Output() onPreviousQuestionClick: EventEmitter<any> = new EventEmitter();
  @Output() onNextQuestionClick: EventEmitter<any> = new EventEmitter();

  public buttonRippleEffect: boolean = true;

  ngAfterViewInit() {
    componentHandler.upgradeDom();
    console.log('questionModel: ', this.questionModel);
  }

  public goPreviousQuestion(event): void {
    this.onPreviousQuestionClick.emit(event);
  }

  public goNextQuestion(event): void {
    this.onNextQuestionClick.emit(event);
  }
}

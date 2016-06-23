import {
  Component,
  Input,
  AfterViewInit
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
        *ngFor="let questionContent of questionModel; let questionContentIdx = index"
        mdl-tab-contents
        class="tabContentSizing"
        [isActiveTab]="currentQuestionIndex === questionContentIdx"
        [tabContentRef]="questionModel[questionContentIdx].number">
        <ul>
          <li *ngFor="let choice of questionContent.choice_list; let choixIdx = index">
            {{ choice.translateId | translate }}
          </li>
        </ul>

        <button
          *ngIf="!first"
          mdlRaisedButton
          mdlButtonColor="accent"
          [mdlButtonRipple]="buttonRippleEffect">
          {{ backButtonText | translate }}
        </button>

        <button
          mdlRaisedButton
          mdlButtonColor="accent"
          [mdlButtonRipple]="buttonRippleEffect">
          {{ nextButtonText | translate}}
        </button>
      </div>

    </mdl-tab>

  </mdl-paper>
  `,
  styles   : [``]
})
export class QuizQuestionsComponent implements AfterViewInit {
  @Input() currentQuestionIndex: number;
  @Input() questionModel: Array<any>;
  @Input() questionsLength: number;
  @Input() backButtonText: string;
  @Input() nextButtonText: string;

  public buttonRippleEffect: boolean = true;

  constructor() {
    // Do stuff
  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
    console.log(this.backButtonText);
  }
}


// <div mdl-tab-contents
//   class="tabContentSizing"
//   [isActiveTab]="secondTabIsActive"
//   [tabContentRef]="secondTabContentRef">
//   <span>
//     2nd TAB CONTENT HERE
//   </span>
//   <button
//     mdlRaisedButton
//     mdlButtonColor="colored"
//     [mdlButtonRipple]="buttonRippleEffect">
//     mdl raised button
//   </button>
// </div>

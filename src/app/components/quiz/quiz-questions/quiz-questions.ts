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
      Quiz view here
    </h3>

    <mdl-tab>

      <a
        *ngFor="let header of questionModel; let qestionIdx = index"
        mdl-tab-headers
        [isActiveTab]="currentQuestionIndex === qestionIdx"
        [tabContentRef]="questionModel[qestionIdx].number">
        {{ questionModel[qestionIdx].Q_translate_id | translate }}
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
  `,
  styles   : [``]
})
export class QuizQuestionsComponent implements AfterViewInit {
  @Input() currentQuestionIndex: number;
  @Input() questionModel: Array<any>;
  @Input() questionsLength: number;

  constructor() {
    // Do stuff
  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}

// <a mdl-tab-headers
//   [isActiveTab]="firstTabIsActive"
//   [tabContentRef]="firstTabContentRef">
//   {{ firstTabHeaderText }}
// </a>
//
// <a mdl-tab-headers
//   [isActiveTab]="secondTabNotActive"
//   [tabContentRef]="secondTabContentRef">
//   {{ secondTabHeaderText }}
// </a>

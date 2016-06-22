import {
  Component,
  Input,
  Output,
  AfterViewInit,
  OnDestroy,
  EventEmitter
}                         from '@angular/core';
import {
  NgClass
}                         from '@angular/common';
import { MDL_DIRECTIVES } from '../../mdl/mdl';
import {TranslatePipe}    from 'ng2-translate/ng2-translate';

@Component({
  selector:   'quiz-intro',
  directives: [...MDL_DIRECTIVES, NgClass],
  pipes: [TranslatePipe],
  template: `
  <mdl-toolbar
    toolbarColor="#fff"
    toolbarBackgroundColor="#3F51B5">
    <span class="mdl-layout-title">
      {{ 'QUIZZ_WORD' | translate }}
    </span>
    <div class="mdl-layout-spacer"></div>
  </mdl-toolbar>

  <mdl-paper>
    <section id="quizIntroBody">
      <h5
        class="title"
        [ngClass]="{
          'animated': animated,
          'invisible': !animationsActive,
          'fadeInDown': animationsActive
        }">
        {{ subtitle | translate }}
      </h5>
      <p
        [ngClass]="{
          'animated': animated,
          'invisible': !animationsActive,
          'fadeInDown': animationsActive
        }">
        {{ body | translate }}
      </p>
    </section>
    <section id="quizIntroActions">
      <div class="mdl-grid">
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-cell mdl-cell--4-col mdl-typography--text-center">
          <button
            mdlRaisedButton
            mdlButtonColor="accent"
            [mdlButtonRipple]="buttonRippleEffect"
            (click)="handleStartQuizClick()">
            {{ goBtnText | translate }}
          </button>
        </div>
        <div class="mdl-layout-spacer"></div>
      </div>
    </section>
  </mdl-paper>
  `,
  styles   : [`
    .container {
      height: 100%;
      width: 100%;
    }
    .title {
      color: '#fff'
    }
  `]
})
export class QuizIntro implements AfterViewInit, OnDestroy {
  @Input() subtitle: string;
  @Input() body: string;
  @Input() goBtnText: string;
  @Output() onStartQuizClick: EventEmitter<any> = new EventEmitter();

  public animated: boolean = true;
  public animationsActive: boolean = false;

  private _subTitleTimer: any = null;

  ngAfterViewInit() {
    this._subTitleTimer = setTimeout(
      () => this.animationsActive = true
      , 500
    );
  }

  ngOnDestroy() {
    clearTimeout(this._subTitleTimer);
  }

  public handleStartQuizClick(): void {
    this.onStartQuizClick.emit({ quizStart: true });
  }
}

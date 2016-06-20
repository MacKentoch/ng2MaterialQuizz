import { Injectable } from '@angular/core';
import { IQuizModel } from './quiz-model';

export interface IAppState {
  currentView: string,

  // quizStarted: boolean,
  quizQuestionIndex: number
  // quizEnded: boolean

  quiz: IQuizModel
  quizQuestionsLength: number
}




@Injectable()
export class AppStateService implements IAppState {
  private _currentView: string = null;
  public get currentView() {
    return this._currentView;
  }
  public set currentView(value: string) {
    if (value !== this._currentView) {
      this._currentView = value;
    }
  }

  private _isQuizIntro: boolean = false;
  public get isQuizIntro() {
    return this._isQuizIntro;
  }
  //
  private _isQuizEnd: boolean = false;
  public get isQuizEnd() {
    return this._isQuizEnd;
  }

  private _quizQuestionIndex: number = -1;
  public get quizQuestionIndex() {
    return this._quizQuestionIndex;
  }

  private _quiz: IQuizModel = null;
  public get quiz() {
    return this._quiz;
  }

  private _quizQuestionsLength: number = 0;
  public get quizQuestionsLength() {
    return this._quizQuestionsLength;
  }

  constructor(quizModel: IQuizModel) {
    this._quiz = quizModel;
  }

  public setQuizStarted(): void {
    this._quizQuestionIndex  = -1;
    this._isQuizIntro = true,
    this._isQuizEnd   = false;
    if (this._quiz.questions && this._quiz.questions.length) {
      this._quiz._quizQuestionsLength = this._quiz.questions.length;
    } else {
      throw new exception('error quiz model is empty')
    }
  }

  public goNext(): void {
    if (this._quiz._quizQuestionsLength > 0) {
      this.incrementQuestionIndex();
    }
  }

  public goPrevious(): void {
    this.decrementQuestionIndex();
  }

  private incrementQuestionIndex(): void {
    this._quizQuestionIndex = this._quizQuestionIndex + 1 <= this._quizQuestionsLength ? this._quizQuestionIndex + 1 : this._quizQuestionIndex;
  }

  private decrementQuestionIndex(): void {
    this._quizQuestionIndex = this._quizQuestionIndex -1 >= 0 ? this._quizQuestionIndex -1: this._quizQuestionIndex;
  }

}

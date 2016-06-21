import { Injectable } from '@angular/core';
import {
  IQuizModel,
  IquizIntro,
  IquizEnd,
  Iquestion
}                     from '../quiz-model/quiz-model';

const StaticQuizModel     = require('../../models/quiz-model.init.json');
const appConfigModel      = require('../../models/appConfig.model.json');
const appHeaderMenuModel  = require('../../models/appHeader.menuModel.json');

export interface IAppState {
  currentView: string;

  languages: Array<any>;
  currentLanguage: string;
  headerRightMenuModel: Array<any>;
  headerRightLastEvent: string;
  modalLastEvent: string;
  modalOpened: boolean;

  quizIntro: IquizIntro;
  quizEnd: IquizEnd;
  quizQuestions: Array<Iquestion>;
  quizQuestionIndex: number;
  quizQuestionsLength: number;
}


@Injectable()
export class AppStateService implements IAppState {
  private _currentView: string = null;
  public get currentView() {
    return this._currentView;
  }

  private _languages: Array<any> = [];
  public get languages() {
    return this._languages;
  }
  public set languages(value: Array<any>) {
    if (Array.isArray(value)) {
      this._languages = [...value];
    }
  }

  private _currentLanguage: string = '';
  public get currentLanguage() {
    return this._currentLanguage;
  }
  public set currentLanguage(value: string) {
    if (value) {
      this._currentLanguage = value;
    }
  }

  private _modalOpened: boolean = false;
  public get modalOpened() {
    return this._modalOpened;
  }
  public set modalOpened(value: boolean) {
    this._modalOpened = value;
  }

  private _headerRightMenuModel: Array<any> = [];
  public get headerRightMenuModel() {
    return this._headerRightMenuModel;
  }

  private _headerRightLastEvent: string = '';
  public get headerRightLastEvent() {
    return this._headerRightLastEvent;
  }
  public set headerRightLastEvent(value: string) {
    if (value) {
      this._headerRightLastEvent= value;
    }
  }

  private _modalLastEvent: string = '';
  public get modalLastEvent() {
    return this._modalLastEvent;
  }
  public set modalLastEvent(value: string) {
    if (value) {
      this._modalLastEvent= value;
    }
  }

  private _quizIntro: IquizIntro = null;
  public get quizIntro() {
    return this._quizIntro;
  }

  private _quizEnd: IquizEnd = null;
  public get quizEnd() {
    return this._quizEnd;
  }

  private _quizQuestions: Array<Iquestion> = [];
  public get quizQuestions() {
    return this._quizQuestions;
  }

  private _quizQuestionIndex: number = -1;
  public get quizQuestionIndex() {
    return this._quizQuestionIndex;
  }

  private _quizQuestionsLength: number = 0;
  public get quizQuestionsLength() {
    return this._quizQuestionsLength;
  }

  constructor() {
    this._initQuizModelFromMock();
    this._languages = [...appConfigModel.languages];
    this._headerRightMenuModel = [...appHeaderMenuModel];
  }

  private _initQuizModelFromMock(): void {
    this._quizIntro     = StaticQuizModel.intro;
    this._quizQuestions = StaticQuizModel.questions;
    this._quizEnd       = StaticQuizModel.end;
  }

  public setQuizStarted(): void {
    this._quizQuestionIndex  = -1;
    if (this._quizQuestions && this._quizQuestions.length > 0) {
      this._quizQuestionsLength = this._quizQuestions.length;
    } else {
      throw new Error('error quiz model is empty');
    }
  }

  public goNextQuestion(): void {
    if (this._quizQuestionsLength > 0) {
      this._incrementQuestionIndex();
    }
  }

  public goPreviousQuestion(): void {
    this._decrementQuestionIndex();
  }

  private _incrementQuestionIndex(): void {
    this._quizQuestionIndex = this._quizQuestionIndex + 1 <= this._quizQuestionsLength
      ? this._quizQuestionIndex + 1
      : this._quizQuestionIndex;
  }

  private _decrementQuestionIndex(): void {
    this._quizQuestionIndex = this._quizQuestionIndex -1 >= 0
      ? this._quizQuestionIndex -1
      : this._quizQuestionIndex;
  }

}

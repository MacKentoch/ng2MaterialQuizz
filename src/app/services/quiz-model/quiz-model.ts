import { Injectable } from '@angular/core';

const StaticQuizModel = require('../../models/quiz-model.init.json');

export interface IquizIntro {
  title_translate_id:     string;
  content_1_translate_id: string;
  content_2_translate_id: string;
  go_button_text_id:      string;
}

export interface IquizEnd {
  title_translate_id:   string;
  content_translate_id: string;
  prev_button_text:     string;
  end_button_text:      string;
}

export interface Ichoice {
  choiceId:     number;
  type:         string;
  name:         string;
  translateId:  string;
  defaultValue: any;
  edited:       boolean;
}

export interface Iquestion {
  number:           number;
  Q_translate_id:   string;
  choice_list:      Array<Ichoice>;
  min_choices:      number;
  max_choices:      number;
  nbChoicesEdited:  number;
}

export interface IQuizModel {
  intro:      IquizIntro;
  end:        IquizEnd;
  questions:  Array<Iquestion>;
}


@Injectable()
export class QuizModelService implements IQuizModel {
  public intro: IquizIntro;
  public end: IquizEnd;
  public questions: Array<Iquestion>;

  constructor() {
    this.init();
  }

  init() {
    this.intro      = StaticQuizModel.intro;
    this.end        = StaticQuizModel.end;
    this.questions  = [].concat(StaticQuizModel.questions);
  }
}

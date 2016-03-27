import {Injectable} from 'angular2/core';

const StaticQuizModel = require('../models/quiz-model.init.json');

interface IquizIntro {
  title_translate_id 			: string,
  content_1_translate_id 	: string,
  content_2_translate_id 	: string,
  go_button_text_id				: string
}

interface IquizEnd {
  title_translate_id 		: string,
  content_translate_id 	: string
}

interface Ichoice {
  choiceId    : number,
  type        : string,
  name        : string,
  translateId : string,
  defaultValue: any,
  edited      : boolean
}

interface Iquestion {
  number 					: number,
  Q_translate_id 	: string,
  choice_list			: Array<Ichoice>,
  min_choices     : number,
  max_choices 	  : number,
  nbChoicesEdited : number
}



interface IQuizModel {
  intro       : IquizIntro,
  end         : IquizEnd,
  questions   : Array<Iquestion>
}

@Injectable()
export class QuizModel implements IQuizModel {
  public intro      : IquizIntro;
  public end        : IquizEnd;
  public questions  : Array<Iquestion>;

  constructor() {
    this.init();
  }

  init() {
    this.intro      = StaticQuizModel.intro;
    this.end        = StaticQuizModel.end;
    this.questions  = [].concat(StaticQuizModel.questions);
  }
}

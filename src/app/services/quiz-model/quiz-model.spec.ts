import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from 'angular2/testing';
import {QuizModel} from './quiz-model';

describe('QuizModel Service', () => {

  beforeEachProviders(() => [QuizModel]);

  describe('intro property', () => {
    it(`should have "title_translate_id" initiated`, inject([QuizModel], (quizModel:QuizModel) => {
      expect(quizModel.intro.title_translate_id).toBe('QUIZZ_INTRO_TITLE');
    }));

    it(`should have "content_1_translate_id" initiated`, inject([QuizModel], (quizModel:QuizModel) => {
      expect(quizModel.intro.content_1_translate_id).toBe('QUIZZ_INTRO_CONTENT1');
    }));

    it(`should have "content_2_translate_id" initiated`, inject([QuizModel], (quizModel:QuizModel) => {
      expect(quizModel.intro.content_2_translate_id).toBe('QUIZZ_INTRO_CONTENT2');
    }));

    it(`should have "go_button_text_id" initiated`, inject([QuizModel], (quizModel:QuizModel) => {
      expect(quizModel.intro.go_button_text_id).toBe('QUIZZ_START_BUTTON_TEXT');
    }));
  })



});

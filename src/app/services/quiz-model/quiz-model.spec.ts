import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
}                           from '@angular/core/testing';
import { QuizModelService } from './quiz-model';

describe('QuizModel Service', () => {
  beforeEachProviders(() => [QuizModelService]);

  describe('intro property', () => {
    it(`should have "title_translate_id" initiated`, inject([QuizModelService], (quizModel:QuizModelService) => {
      expect(quizModel.intro.title_translate_id).toBe('QUIZZ_INTRO_TITLE');
    }));

    it(`should have "content_1_translate_id" initiated`, inject([QuizModelService], (quizModel:QuizModelService) => {
      expect(quizModel.intro.content_1_translate_id).toBe('QUIZZ_INTRO_CONTENT1');
    }));

    it(`should have "content_2_translate_id" initiated`, inject([QuizModelService], (quizModel:QuizModelService) => {
      expect(quizModel.intro.content_2_translate_id).toBe('QUIZZ_INTRO_CONTENT2');
    }));

    it(`should have "go_button_text_id" initiated`, inject([QuizModelService], (quizModel:QuizModelService) => {
      expect(quizModel.intro.go_button_text_id).toBe('QUIZZ_START_BUTTON_TEXT');
    }));
  })
});

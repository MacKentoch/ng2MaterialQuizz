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

  it('should ...', inject([QuizModel], (quizModel:QuizModel) => {
    expect(quizModel.title).toBe('Angular 2');
  }));

});

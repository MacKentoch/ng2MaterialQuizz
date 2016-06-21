import { AppStateService }  from './appState/appState';
import { QuizModelService } from './quiz-model/quiz-model';

export {
  AppStateService,
  QuizModelService
};

export const APP_SERVICES: Array<any> = [
  AppStateService,
  QuizModelService
];

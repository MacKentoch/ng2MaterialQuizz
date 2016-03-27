import {
  Component,
  AfterViewInit
}                                       from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS}                 from 'angular2/common';
import {QuizModel}                      from './services/quiz-model/quiz-model';
import {ViewsContainer}                 from './containers/views-container/views-container';
import {Home}                           from './views/home/home';
import {Quiz}                           from "./views/quiz/quiz";
import {AppHeader}                      from './components/app-header/app-header';
import {AppDrawer}                      from './components/app-drawer/app-drawer';
import {TranslateService}               from 'ng2-translate/ng2-translate';
import {MdlDialog}                      from './components/mdl/mdl';

import '../style/app.scss';
import 'animate.css';

const appHeaderMenuModel  = require('./models/appHeader.menuModel.json');
const appDrawerModel      = require('./models/appDrawer.menuModel.json');

declare let componentHandler: any;

@Component({
  selector: 'app',
  providers: [...FORM_PROVIDERS, QuizModel],
  directives: [ViewsContainer, AppHeader, AppDrawer, MdlDialog, ...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('./app.scss')],
  template: `
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
              mdl-layout--fixed-header">
    <app-header
      class="mdl-layout__header"
      [menuRightModel]="appHeaderMenuModel">
    </app-header>
    <app-drawer
      class="mdl-layout__drawer"
      [drawerTitle]="appDrawerModel.drawerTitle"
      [drawerModel]="appDrawerModel.menu">
    </app-drawer>
    <app-main class="mdl-layout__content">
      <views-container>
        <router-outlet></router-outlet>
      </views-container>
    </app-main>
  </div>
  <mdl-dialog
    [showModal]="appState.modalOpened"
    [title]="translate.instant('CHOOSE_LANGUAGE')"
    [closeModalBtnText]="translate.instant('CLOSE_WORD')"
    >
    <!-- TODO: to make a component -->
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <label
          class="mdl-radio mdl-js-radio mdl-js-ripple-effect"
          for="option-1">
          <input
            type="radio"
            id="option-1"
            class="mdl-radio__button"
            name="options"
            value="1"
            checked>
          <span class="mdl-radio__label">
            French
          </span>
        </label>
      </div>
    </div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <label
          class="mdl-radio mdl-js-radio mdl-js-ripple-effect"
          for="option-2">
          <input
            type="radio"
            id="option-2"
            class="mdl-radio__button"
            name="options"
            value="2">
          <span class="mdl-radio__label">
            English
          </span>
        </label>
      </div>
    </div>
  </mdl-dialog>
  `
})
@RouteConfig([
  {path: '/', component: Home, name: 'Home'},
  {path: '/Quiz', component: Quiz, name: 'Quiz'}
])
export class App implements AfterViewInit {

  public appHeaderMenuModel: Array<any>;
  public appDrawerModel: any;
  public appState: any = {
    currentLanguage : '',
    modalOpened     : false
  };

  private showModal: boolean = false;

  constructor(public quizModel: QuizModel, public translate: TranslateService) {
    const browserLang = this.getBrowserlanguage();
    this.setLanguage(browserLang);
    this.init();
  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  private init() {
    this.appHeaderMenuModel = appHeaderMenuModel;
    this.appDrawerModel     = appDrawerModel;
  }

  private getBrowserlanguage(): string {
    let browserLang = (navigator.language || navigator.browserLanguage).split('-')[0];
    browserLang = /(fr|en)/gi.test(browserLang) ? browserLang : 'en';
    return browserLang;
  }

  public setLanguage(language: string) : void {
    this.translate.use(language);
  }

  public showLangModal() {
    this.showModal = true;
  }


}

import {
  Component,
  AfterViewInit,
  ViewChild
}                                       from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {FORM_PROVIDERS}                 from '@angular/common';
import {QuizModel}                      from './services/quiz-model/quiz-model';
import {ViewsContainer}                 from './containers/views-container/views-container';
import {Home}                           from './views/home/home';
import {Quiz}                           from "./views/quiz/quiz";
import {AppHeader}                      from './components/app-header/app-header';
import {AppDrawer}                      from './components/app-drawer/app-drawer';
import {TranslateService}               from 'ng2-translate/ng2-translate';
import {MdlDialog}                      from './components/mdl/mdl';
import {AppLangSelect}                  from './components/app-lang-select/app-lang-select';

import '../style/app.scss';
import 'animate.css';

const appHeaderMenuModel  = require('./models/appHeader.menuModel.json');
const appDrawerModel      = require('./models/appDrawer.menuModel.json');
const appConfigModel      = require('./models/appConfig.model.json');

declare let componentHandler: any;

@Component({
  selector: 'app',
  providers: [...FORM_PROVIDERS, QuizModel],
  directives: [ViewsContainer, AppHeader, AppDrawer, MdlDialog, AppLangSelect, ...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('./app.scss')],
  template: `
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
              mdl-layout--fixed-header">
    <app-header
      [menuRightModel]="appState.headerRightMenuModel"
      (menuRightItemSelected)="handleRightMenuSelection($event)">
    </app-header>
    <app-drawer
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
    #langModal
    [title]="translate.instant('CHOOSE_LANGUAGE')"
    [closeModalBtnText]="translate.instant('CLOSE_WORD')"
    (onClose)="langModalClose()"
    (onOpen)="handlesLangModalEvent('open')"
    (onClose)="handlesLangModalEvent('close')"
    (onCancel)="handlesLangModalEvent('cancel')"
    >
    <app-lang-select
      [languages]="appState.languages"
      (languageChanged)="handlesLanguageChanged($event)"
      [showFlagsAsLabels]="showCountryFlagsInModal">
    </app-lang-select>

  </mdl-dialog>
  `
})
@RouteConfig([
  {path: '/', component: Home, name: 'Home'},
  {path: '/Quiz', component: Quiz, name: 'Quiz'}
])
export class App implements AfterViewInit {
  @ViewChild('langModal') langModal;

  public appHeaderMenuModel: Array<any>;
  public appDrawerModel: any;

  public showCountryFlagsInModal: boolean = true;

  public appState: any = {
    languages             : [].concat(appConfigModel.languages),
    currentLanguage       : '',
    headerRightMenuModel  : appHeaderMenuModel,
    headerRightLastEvent  : '',
    modalLastEvent        : ''
  };

  constructor(public quizModel: QuizModel, public translate: TranslateService) {
    const browserLang = this.getBrowserlanguage();
    this.setLanguage(browserLang);
    this.init();
  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();

  }

  public setLanguage(language: string) : void {
    this.updateLanguagesSelectedLang(language);
    this.translate.use(language);
  }

  public showLangModal(): void {
    this.langModal.openModal();
  }

  public langModalClose(): void {
    this.appState.modalOpened = false;
  }

  public handleRightMenuSelection(idMenu: number): void {
    // TODO: to fix headerRightLastEvent
    // console.dir(idMenu);
    // console.info(typeof idMenu);
    switch (idMenu) {
      case 0:
        this.showLangModal();
        this.appState.headerRightLastEvent = 'open language modal';
      case 1:
        this.appState.headerRightLastEvent = 'open github';
      default:
        this.appState.headerRightLastEvent = 'undefined event';
    }
  }

  public handlesLangModalEvent(eventName): void {
    this.appState.modalLastEvent = eventName;
    console.dir(Object.assign({}, this.appState));
  }

  public handlesLanguageChanged(newLanguage: string): void {
    if (newLanguage) {
      this.setLanguage(newLanguage);
    }
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

  private updateLanguagesSelectedLang(selectedLang): void {
    let languagesUpdated;
    languagesUpdated = this.appState.languages.map((lang, index) => {
      lang.selected = false;
      if (lang.idLanguage === selectedLang) {
        lang.selected = true;
      }
      return lang;
    });
    this.appState.languages = [].concat(languagesUpdated);
  }
}




// <!-- TODO: to make a component -->
// <div class="mdl-grid">
//   <div class="mdl-cell mdl-cell--12-col">
//     <label
//       class="mdl-radio mdl-js-radio mdl-js-ripple-effect"
//       for="option-1">
//       <input
//         type="radio"
//         id="option-1"
//         class="mdl-radio__button"
//         name="options"
//         value="1"
//         checked>
//       <span class="mdl-radio__label">
//         French
//       </span>
//     </label>
//   </div>
// </div>
// <div class="mdl-grid">
//   <div class="mdl-cell mdl-cell--12-col">
//     <label
//       class="mdl-radio mdl-js-radio mdl-js-ripple-effect"
//       for="option-2">
//       <input
//         type="radio"
//         id="option-2"
//         class="mdl-radio__button"
//         name="options"
//         value="2">
//       <span class="mdl-radio__label">
//         English
//       </span>
//     </label>
//   </div>
// </div>

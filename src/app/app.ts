import {
  Component,
  AfterViewInit,
  ViewChild
}                             from '@angular/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
}                             from '@angular/router-deprecated';
import { FORM_PROVIDERS }     from '@angular/common';
import { APP_COMPONENTS }     from './components/app';
import { AppStateService }    from './services';
import {
  HomeComponent,
  QuizComponent
}                             from './views';
import { TranslateService }   from 'ng2-translate/ng2-translate';
import { MdlDialogComponent } from './components/mdl/mdl';

const appHeaderMenuModel  = require('./models/appHeader.menuModel.json');
const appDrawerModel      = require('./models/appDrawer.menuModel.json');

declare const componentHandler: any;

@Component({
  selector:   'app',
  providers:  [...FORM_PROVIDERS, AppStateService],
  directives: [...APP_COMPONENTS, MdlDialogComponent, ...ROUTER_DIRECTIVES],
  pipes:      [],
  styles:     [require('./app.scss')],
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
    <app-main>
      <router-outlet></router-outlet>
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
  {path: '/', component: HomeComponent, name: 'Home'},
  {path: '/Quiz', component: QuizComponent, name: 'Quiz'}
])
export class AppComponent implements AfterViewInit {
  @ViewChild('langModal') langModal;

  public appHeaderMenuModel: Array<any>;
  public appDrawerModel: any;
  public showCountryFlagsInModal: boolean = true;

  constructor(public appState: AppStateService, public translate: TranslateService) {
    const browserLang = this.getBrowserlanguage();
    this.setLanguage(browserLang);
    this.init();
  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  public setLanguage(language: string): void {
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
      break;

      case 1:
        this.appState.headerRightLastEvent = 'open github';
      break;

      default:
        this.appState.headerRightLastEvent = 'undefined event';
      break;
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
    this.appState.languages = [...languagesUpdated];
  }
}

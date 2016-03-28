import {
  Component,
  Input,
  Output,
  EventEmitter
}                         from 'angular2/core';
import {NgFor}            from 'angular2/common';

export interface ILanguage {
  idLanguage: string;
  LanguageName: string;
  selected: boolean;
}

@Component({
  selector    : 'app-lang-select',
  template    : `
  <div
    *ngFor="#lang of languages; #i = index"
    class="mdl-grid">
    <div
      class="mdl-cell mdl-cell--12-col"
      (click)="handlesLanguageSelected(lang.idLanguage)">
      <label
        class="mdl-radio mdl-js-radio mdl-js-ripple-effect"
        [attr.for]="lang.idLanguage">
        <input
          type="radio"
          [id]="lang.idLanguage"
          class="mdl-radio__button"
          name="options"
          [value]="lang.idLanguage"
          >
        <span class="mdl-radio__label">
          {{lang.LanguageName}}
        </span>
      </label>

    </div>
  </div>
  `,
  styleUrls   : [``],
  providers   : [],
  directives  : [NgFor],
  pipes       : []
})
export class AppLangSelect  {
  @Input() languages: Array<ILanguage> = [
    {
      idLanguage:   'fr',
      LanguageName: 'french',
      selected:     true
    },
    {
      idLanguage:   'en',
      LanguageName: 'english',
      selected:     false
    }
  ];
  @Output() languageChanged: EventEmitter<any> = new EventEmitter();

  constructor() {
    // Do stuff
  }

  public handlesLanguageSelected(idLang: string): void {
    this.languageChanged.emit(idLang);
  }
}

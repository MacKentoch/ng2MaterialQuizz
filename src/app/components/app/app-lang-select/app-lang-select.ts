import {
  Component,
  Input,
  Output,
  EventEmitter
}                         from '@angular/core';
import { NgFor, NgIf }    from '@angular/common';
import { FLAGS_ICONS }    from '../../ui-tools/country-flags';

export interface ILanguage {
  idLanguage:   string;
  LanguageName: string;
  selected:     boolean;
}

@Component({
  selector:   'app-lang-select',
  providers:  [],
  directives: [NgFor, NgIf, ...FLAGS_ICONS],
  pipes:      [],
  template: `
  <div
    *ngFor="let lang of languages; let i = index"
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
          [checked]="lang.selected">
        <span
          class="mdl-radio__label"
          *ngIf="!showFlagsAsLabels">
          {{ lang.LanguageName }}
        </span>
        <country-flag-en
          *ngIf="showFlagsAsLabels && lang.idLanguage === 'en'"
          [height]="'36px'"
          [width]="'36px'">
        </country-flag-en>
        <country-flag-fr
          *ngIf="showFlagsAsLabels && lang.idLanguage === 'fr'"
          [height]="'36px'"
          [width]="'36px'">
        </country-flag-fr>
      </label>
    </div>
  </div>
  `,
  styleUrls: [``]
})
export class AppLangSelectComponent  {
  @Input() languages: Array<ILanguage> = [{
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
  @Input() showFlagsAsLabels: boolean           = false;
  @Output() languageChanged: EventEmitter<any>  = new EventEmitter();

  constructor() {
    // Do stuff
  }

  public handlesLanguageSelected(idLang: string): void {
    this.languageChanged.emit(idLang);
  }
}

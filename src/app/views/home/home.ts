import {
  Component,
  AfterViewInit,
  OnDestroy
}                               from '@angular/core';
import { FORM_DIRECTIVES }      from '@angular/common';
import {
  ViewsContainerComponent
}                               from '../../containers';
import { MdlPaperComponent }    from '../../components/mdl/mdl';
import { UiMarginTopComponent } from '../../components/ui-tools';
import { TranslatePipe }        from 'ng2-translate/ng2-translate';

const TITLE_ONE_ANIMATION_DELAY = 400;
const TITLE_TWO_ANIMATION_DELAY = 800;

@Component({
  selector: 'home',
  template: `
  <views-container>
    <mdl-paper>
      <div class="homeTitleContainer">
        <div class="mdl-grid">
          <div class="mdl-layout-spacer"></div>
          <div class="ng2MaterialImg"></div>
          <div class="mdl-layout-spacer"></div>
        </div>
        <div class="mdl-grid">
          <div class="mdl-layout-spacer"></div>
          <h2 class="titleText">
            {{ 'HOME_TITRE_1_QUIZZ' | translate }}
          </h2>
          <div class="mdl-layout-spacer"></div>
        </div>
      </div>
      <ui-margin-top marginTop="60px"></ui-margin-top>
      <h4
        ref="homeViewTitleTwo"
        [class]="titleOneAnimationClass">
        {{ 'HOME_TITRE_2_QUIZZ' | translate }}
      </h4>
      <p
        ref="homeViewDetail"
        [class]="titleTwoAnimationClass">
        {{ 'HOME_DETAIL_TEXT' | translate }}
      </p>
    </mdl-paper>
  </views-container>
  `,
  styles: [`
    .homeTitleContainer {
      background-color : #6C7A89;
    }
    .ng2MaterialImg {
      color: #000;
      height: 310px;
      width:310px;
      background: url('./img/angular2.png') center / cover;
    }
    .titleText {
      color : #fff;
    }
    .invisible {
      opacity : 0;
    }
  `],
  providers   : [],
  directives  : [ViewsContainerComponent, MdlPaperComponent, UiMarginTopComponent, ...FORM_DIRECTIVES],
  pipes       : [TranslatePipe]
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private titleOneAnimTimer: any = null;
  private titleTwoAnimTimer: any = null;
  public titleOneAnimationClass: string = 'animated invisible';
  public titleTwoAnimationClass: string = 'homeDetailsClasses invisible';

  constructor() {
    // Do stuff
  }

  ngAfterViewInit() {
    this.addTitleOneAnimation();
  }

  ngOnDestroy() {
    clearTimeout(this.titleOneAnimTimer);
    clearTimeout(this.titleTwoAnimTimer);
  }

  addTitleOneAnimation(): void {
    this.titleOneAnimTimer = setTimeout(
      () => {
        this.titleOneAnimationClass = 'animated fadeInUp';
        this.addTitleTwoAnimation();
      }, TITLE_ONE_ANIMATION_DELAY);
  }

  addTitleTwoAnimation(): void {
    this.titleTwoAnimTimer = setTimeout(
      () => {
        this.titleTwoAnimationClass = 'homeDetailsClasses animated zoomIn';
      }, TITLE_TWO_ANIMATION_DELAY);
  }
}

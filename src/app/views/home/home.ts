import {Component, OnInit, AfterViewInit}  from 'angular2/core';
import {FORM_DIRECTIVES}    from 'angular2/common';
import {ViewsContainer}     from '../../containers/views-container/views-container';
import {MdlPaper}           from '../../components/mdl/mdl';
import {UiMarginTop}        from '../../components/ui-tools/ui-tools.ts';
import {TranslatePipe}      from 'ng2-translate/ng2-translate';

@Component({
  selector    : 'home',
  template    : `
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
            {{'HOME_TITRE_1_QUIZZ' | translate}}
          </h2>
          <div class="mdl-layout-spacer"></div>
        </div>
      </div>
      <ui-margin-top marginTop="60px"></ui-margin-top>
      <h4
        ref="homeViewTitleTwo"
        [class]="titleOneAnimationClass">
        {{'HOME_TITRE_2_QUIZZ' | translate}}
      </h4>
      <p
        ref="homeViewDetail"
        [class]="titleTwoAnimationClass">
        {{'HOME_DETAIL_TEXT' | translate}}
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
  directives  : [ViewsContainer, MdlPaper, UiMarginTop, ...FORM_DIRECTIVES],
  pipes       : [TranslatePipe]
})
export class Home implements OnInit {
  public HOME_TITRE_1_QUIZZ: string       = 'Angular2 Material Quizz';
  public HOME_TITRE_2_QUIZZ: string       = 'material quiz angular2 version';
  //public HomeViewAnimationClass:string    = 'animatedViews invisible'; no animation support in angular2 beta : animating route views is not possible yet
  public titleOneAnimationClass: string   = 'animated invisible';
  public titleTwoAnimationClass: string   = 'homeDetailsClasses invisible';

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

  ngAfterViewInit() {
    this.addTitleOneAnimation();
  }

  // addHomeViewAnimation() {
  //   setTimeout(
  //     ()=>{
  //       this.HomeViewAnimationClass = 'animated fadeInUp';
  //       this.addTitleOneAnimation();
  //     }, 800);
  // }

  addTitleOneAnimation() {
    setTimeout(
      ()=>{
        this.titleOneAnimationClass = 'animated fadeInUp';
        this.addTitleTwoAnimation();
      }, 400);
  }

  addTitleTwoAnimation() {
    setTimeout(
      ()=>{
        this.titleTwoAnimationClass = 'homeDetailsClasses animated zoomIn';
      }, 800);
  }
}

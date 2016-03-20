import {Component, OnInit}  from 'angular2/core';
import {FORM_DIRECTIVES}    from 'angular2/common';
import {ViewsContainer}     from '../../containers/views-container/views-container';
import {MdlPaper}           from '../../components/mdl/mdl';
import {UiMarginTop}        from '../../components/ui-tools/ui-tools.ts';

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
            {{HOME_TITRE_1_QUIZZ}}
          </h2>
          <div class="mdl-layout-spacer"></div>
        </div>
      </div>
      <ui-margin-top marginTop="60px"></ui-margin-top>
      <h4
        ref="homeViewTitleTwo"
        class="">
        {{HOME_TITRE_2_QUIZZ}}
      </h4>
      <p
        ref="homeViewDetail"
        class="homeDetailsClasses">
        {this.context.translate.HOME_DETAIL_TEXT}
      </p>
    </mdl-paper>
  </views-container>
  `,
  styleUrls   : [require('./home.scss')],
  providers   : [],
  directives  : [ViewsContainer, MdlPaper, UiMarginTop, ...FORM_DIRECTIVES],
  pipes       : []
})
export class Home implements OnInit {
  public HOME_TITRE_1_QUIZZ: string = 'Welcome to ng2MaterialQuizz';
  public HOME_TITRE_2_QUIZZ: string = 'material quiz angular2 version';

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}

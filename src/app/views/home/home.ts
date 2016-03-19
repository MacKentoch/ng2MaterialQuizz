import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {ViewsContainer} from '../../containers/views-container/views-container';

@Component({
  selector    : 'home',
  template    : `
  <views-container>
    <h1>
      {{title}}
    </h1>
  </views-container>
  `,
  styleUrls   : [require('./home.scss')],
  providers   : [],
  directives  : [ViewsContainer, ...FORM_DIRECTIVES],
  pipes       : []
})
export class Home implements OnInit {
  public title: string = 'Welcome to ng2MaterialQuizz';

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}

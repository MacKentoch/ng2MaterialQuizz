import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {AppLayout} from './containers/app-layout/app-layout';

import '../style/app.scss';

import {Api} from './services/api/api';
import {Home} from './views/home/home';
import {About} from "./views/about/about";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app', // <app></app>
  providers: [...FORM_PROVIDERS, Api],
  directives: [AppLayout, ...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('./app.scss')],
  template: require('./app.html')
})
@RouteConfig([
  {path: '/', component: Home, name: 'Home'},
  {path: '/About', component: About, name: 'About'}
])
export class App {
  url: string = 'https://github.com/preboot/angular2-webpack';

  constructor(public api: Api) {
  }
}

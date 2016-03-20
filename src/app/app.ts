import {Component, OnInit}              from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS}                 from 'angular2/common';
import {Api}                            from './services/api/api';
import {ViewsContainer}                 from './containers/views-container/views-container';
import {Home}                           from './views/home/home';
import {About}                          from "./views/about/about";
import {AppHeader}                      from './components/app-header/app-header';
import {AppDrawer}                      from './components/app-drawer/app-drawer';
import '../style/app.scss';
// import appHeaderMenuModel               from './models/appHeader.menuModel.json'

declare let componentHandler: any;
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app', // <app></app>
  providers: [...FORM_PROVIDERS, Api],
  directives: [ViewsContainer, AppHeader, AppDrawer, ...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('./app.scss')],
  template: require('./app.html')
})
@RouteConfig([
  {path: '/', component: Home, name: 'Home'},
  {path: '/About', component: About, name: 'About'}
])
export class App implements OnInit {
  url: string = 'https://github.com/preboot/angular2-webpack';

  constructor(public api: Api) {
  }

  ngOnInit() {
    // MDL - React trick This upgrades all upgradable components at 1st render
    componentHandler.upgradeDom();
  }
}

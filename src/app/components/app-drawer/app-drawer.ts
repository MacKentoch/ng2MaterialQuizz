import {Component} from 'angular2/core';

@Component({
  selector    : 'app-drawer',
  template    : `
  <span class="mdl-layout-title">Title</span>
  <nav class="mdl-navigation">
    <a class="mdl-navigation__link" href="">Link</a>
    <a class="mdl-navigation__link" href="">Link</a>
    <a class="mdl-navigation__link" href="">Link</a>
    <a class="mdl-navigation__link" href="">Link</a>
  </nav>
  `,
  styleUrls   : [require('./app-drawer.scss')],
  providers   : [],
  directives  : [],
  pipes       : []
})
export class AppDrawer {
  constructor() {
    // Do stuff
  }
}

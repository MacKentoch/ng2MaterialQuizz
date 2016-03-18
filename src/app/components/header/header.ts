import {Component, OnInit} from 'angular2/core';

@Component({
  selector    : 'header',
  template : require('./header.html'),
  styleUrls   : [require('./header.scss')],
  providers   : [],
  directives  : [],
  pipes       : []
})
export class Header implements OnInit {
  public title:string   = 'ng2MaterialQuizz';
  public menuId:string  = 'navBarTopRightMenu';

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
  }

}

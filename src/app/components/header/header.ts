import {Component, OnInit} from 'angular2/core';

@Component({
  selector    : 'header',
  templateUrl : 'about.html',
  styleUrls   : ['about.scss'],
  providers   : [],
  directives  : [],
  pipes       : []
})
export class About implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
  }

}

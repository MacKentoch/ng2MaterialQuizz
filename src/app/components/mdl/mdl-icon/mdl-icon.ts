import {
  Component,
  Input,
  OnInit
}           from '@angular/core';

@Component({
  selector: 'mdl-icon',
  template: `
  <i class="material-icons">
    {{iconName}}
  </i>
  `,
  styles: [`
    font-size: 24px,
    margin-right: 10px
  `]
})
export class MdlIcon implements OnInit {
  @Input() iconName: string = '';
  constructor() {
    // Do stuff
  }

  ngOnInit() {
    //to add something some day
  }
}

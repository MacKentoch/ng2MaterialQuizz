import {
  Component,
  Input
}           from '@angular/core';

@Component({
  selector: 'mdl-icon',
  template: `
  <i class="material-icons">
    {{ iconName }}
  </i>
  `,
  styles: [`
    font-size: 24px,
    margin-right: 10px
  `]
})
export class MdlIconComponent {
  @Input() iconName: string = '';
  constructor() {
    // Do stuff
  }
}

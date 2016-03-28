// IMPORTANT :  it uses dialog polyfill so it must be a body child
//              or it should have parents without layout
//              => so top level compoenent App is good place to go

import {
  Component,
  Input,
  Output,
  ViewChild,
  AfterViewInit,
  EventEmitter,
  OnChanges,
  SimpleChange
}                     from 'angular2/core';
import {NgIf}         from 'angular2/common';

declare let dialogPolyfill: any;

@Component({
  selector    : 'mdl-dialog',
  template    : `
  <dialog
    #MdlModal
    class="mdl-dialog">
    <h4 class="ModalDialogTitle">
      {{title}}
    </h4>
    <div class="mdl-dialog__content">
      <ng-content></ng-content>
    </div>
    <div class="mdl-dialog__actions">
    <button
      *ngIf="hasCancelButton"
      type="button"
      class="mdl-button close"
      (click)="cancelModal()">
      {{cancelModalBtnText}}
    </button>
      <button
        *ngIf="hasCloseButton"
        type="button"
        class="mdl-button close"
        (click)="closeModal()">
        {{closeModalBtnText}}
      </button>
      <button
        *ngIf="hasValidButton"
        type="button"
        class="mdl-button"
        (click)="validModalClicked()">
        {{validModalBtnText}}
      </button>
    </div>
  </dialog>
  `,
  styles      : [`
    .ModalDialogTitle {
      margin      : 0;
      padding     : 24px 24px 0 24px;
      color       : rgba(0, 0, 0, 0.87);
      font-size   : 24px;
      line-height : 32px;
      font-weight : 400;
    }
  `],
  providers   : [],
  directives  : [NgIf],
})
export class MdlDialog implements AfterViewInit, OnChanges {
  @Input() title: string                = '';
  @Input() showModal: boolean           = false;
  @Input() hasValidButton: boolean      = false;
  @Input() hasCancelButton: boolean     = false;
  @Input() hasCloseButton: boolean      = true;
  @Input() validModalBtnText: string    = 'valid';
  @Input() cancelModalBtnText: string   = 'cancel';
  @Input() closeModalBtnText: string    = 'close';
  @Output() onValid: EventEmitter<any>  = new EventEmitter();
  @Output() onClose: EventEmitter<any>  = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  @ViewChild('MdlModal') MdlModal;

  constructor() {
    // Do stuff
  }

  ngAfterViewInit() {
    //to add something some day
    if (! this.MdlModal.nativeElement.showModal) {
      dialogPolyfill.registerDialog(this.MdlModal.nativeElement);
    }
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    if (changes['showModal'].isFirstChange) {
      if (changes['showModal'].previousValue !== changes['showModal'].currentValue) {
        if (changes['showModal'].currentValue) {
          this.openModal();
        }
      }
    }
  }

  public openModal(): void {
    this.MdlModal.nativeElement.showModal();
  }

  public closeModal(): void {
    this.MdlModal.nativeElement.close();
    this.onClose.emit(null);
  }

  public cancelModal(): void {
    this.MdlModal.nativeElement.close();
    this.onCancel.emit(null);
  }

  public validModalClicked(): void {
    this.onValid.emit(null);
  }
}

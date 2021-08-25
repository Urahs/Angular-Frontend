import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'preview-pop-up',
  templateUrl: './preview-pop-up.component.html',
  styleUrls: ['./preview-pop-up.component.css']
})
export class PreviewPopUpComponent implements OnInit {

  @Input() isPopupVisible: boolean;
  @Input() employee: any;
  @Output() postMessageEvent = new EventEmitter<boolean>();
  
  constructor( public activeModal: NgbActiveModal){
    this.isPopupVisible = true;
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(){
    this.isPopupVisible = false;
    this.postMessageEvent.emit(false);
  }

  ngOnInit(): void {
  }

}
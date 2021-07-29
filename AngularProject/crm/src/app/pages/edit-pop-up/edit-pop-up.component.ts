import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'edit-pop-up',
  templateUrl: './edit-pop-up.component.html',
  styleUrls: ['./edit-pop-up.component.css']
})
export class EditPopUpComponent implements OnInit {

  @Input() isPopupVisible: boolean;
  @Output() postMessageEvent = new EventEmitter<boolean>();
  
  constructor(){
    this.isPopupVisible = true;
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(){
    this.isPopupVisible = false;
    this.postMessageEvent.emit(false);
    //console.log(this.isPopupVisible);
  }

  ngOnInit(): void {
  }

}

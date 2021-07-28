import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

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
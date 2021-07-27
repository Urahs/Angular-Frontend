import { Component, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  @Input() isPopupVisible: any;
  
  constructor(){
    this.isPopupVisible = true;
  }

  ngOnInit(): void {
  }

}

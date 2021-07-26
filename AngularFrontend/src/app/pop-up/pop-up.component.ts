import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  isPopupVisible: boolean;

  constructor() {}

  ngOnInit(): void {
  }

  togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
}

}

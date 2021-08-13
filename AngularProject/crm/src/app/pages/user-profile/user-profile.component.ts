import { CrudService } from '../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails:any;
  isPopupVisible: boolean = false;

    constructor(private service: CrudService ) {
    }
  
  ngOnInit(): void {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }

  closePopup=()=>{
    this.isPopupVisible= false;
    console.log(this.isPopupVisible);

    
  }


}

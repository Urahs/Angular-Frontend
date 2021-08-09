import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Data } from 'src/app/models/Data';
import { Employee } from 'src/app/models/Employee';
import { PostService } from 'src/app/services/PostService';

@Component({
  selector: 'app-add-pop-up',
  templateUrl: './add-pop-up.component.html',
  styleUrls: ['./add-pop-up.component.css']
})


export class AddPopUpComponent implements OnInit {

  employee: Employee = {
    "Name" : "",
    "LastName": "",
    "DateOfBirth": "",
    "IdentificationNumber": "",
    "CustomerId": 0
  };
  
  @Input() employeeId: number;

  dataPost:Data=new Data(); 

  constructor(
    private postService: PostService,
    public activeModal: NgbActiveModal ) {
    this.savePopup=this.savePopup.bind(this);
  }
  
  ngOnInit(): void {
  }
  
  
  savePopup(){
    console.log('on save');
    this.postService.postData(this.employee).subscribe(//this.dataPost
        (response: any) => {
            console.log(response);
        },
        (err: any) => {
            console.log(err);
            
        }
    );
}

}






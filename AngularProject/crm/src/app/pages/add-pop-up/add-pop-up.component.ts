import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from 'src/app/models/Data';
import { Employee } from 'src/app/models/Employee';
import { PostService } from 'src/app/services/PostService';

@Component({
  selector: 'app-add-pop-up',
  templateUrl: './add-pop-up.component.html',
  styleUrls: ['./add-pop-up.component.css']
})

export class AddPopUpComponent implements OnInit {
  
  @Input() isPopupVisible: boolean;
  @Input() employee: Employee;
  @Output() postMessageEvent = new EventEmitter<boolean>();
  
  dataPost:Data=new Data();  
  constructor(private postService: PostService) {
    
    this.isPopupVisible = true;
    this.closeModal = this.closeModal.bind(this);
    this.savePopup=this.savePopup.bind(this);
   }
   
  closeModal(){
    this.isPopupVisible = false;
    this.postMessageEvent.emit(false);
    //console.log(this.isPopupVisible);
  }

  ngOnInit(): void {
  }
  

  savePopup(){
    console.log('on save');


    this.postService.postData(this.dataPost).subscribe(//this.dataPost
        (response) => {
            console.log(response);
        },
        (err) => {
            console.log(err);
            
        }
    );
}

  

}
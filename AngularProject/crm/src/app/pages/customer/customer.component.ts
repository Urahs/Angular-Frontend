import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/Employee';
import { Data } from 'src/app/models/Data';
import { PostService } from 'src/app/services/PostService';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
  
  openPreviewModal: boolean;
  openEditModal: boolean;
  dataSource: Employee[];
  nameOfCus: string;

  dataPost:Data=new Data();  
  constructor(
    private postService: PostService)
  {
    this.savePopup = this.savePopup.bind(this);    
    this.OpenPreviewModal = this.OpenPreviewModal.bind(this);
    this.postMessageEdit = this.postMessageEdit.bind(this);  
    this.postMessagePreview = this.postMessagePreview.bind(this);  
  }

  
  ngOnInit(): void {
      this.getCustomers();
  }

  OpenPreviewModal() {
    this.openPreviewModal = true;
    console.log(this.openPreviewModal);
    }

    postMessagePreview(messageFromChild: any){
        this.openPreviewModal = messageFromChild;
    }

    postMessageEdit(messageFromChild: any){
      this.openEditModal = messageFromChild;
  }

  getCustomers(){
    this.postService.get().subscribe(
        (data) => {
            console.log(data);
            this.dataSource = data;
        },
        (err) => {
            console.log(err);
        }
    );

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












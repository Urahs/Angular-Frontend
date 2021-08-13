import { HttpClient } from '@angular/common/http';
import { Component, enableProdMode, Injectable, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { Data } from 'src/app/models/Data';
// import { PostService } from 'src/app/services/PostService.service';
import { PostService } from 'src/app/services/PostService.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EditPopUpComponent } from '../edit-pop-up/edit-pop-up.component';
import { Router } from '@angular/router';
import { DeletePopUpComponent } from '../delete-pop-up/delete-pop-up.component';
import { PreviewPopUpComponent } from '../preview-pop-up/preview-pop-up.component';

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
  modalReference: NgbModalRef;

  dataPost:Data=new Data();  
  constructor(
    private router: Router,
    private postService: PostService,
    private modalService: NgbModal)
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
    const modalRef = this.modalService.open(PreviewPopUpComponent, {centered:true, size: 'lg'});
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

  OpenEditModal=(data: any)=>{
    const modalRef = this.modalReference = this.modalService.open(EditPopUpComponent, {size: "lg"});
    modalRef.componentInstance.employeeId = data[0];
    
  }


  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

  myCommand(data: any){
    console.log(data);
    
  }

  deleteCustomer(inputData: any){
    this.postService.deleteCustomer(inputData[0]).subscribe(data => {
        console.log(data);
    })   
}

OpenDeleteModal(data: any) {
    const modalRef = this.modalService.open(DeletePopUpComponent, {centered:true, size: 'sm'});
    modalRef.componentInstance.event.subscribe((rec: any) => {
        if(rec) this.deleteCustomer(data);
    })
}

}













/*
I used a method call inside of dx-button which triggers ng-modal to open it. But, whenever method is called, program routes to #. I'm very confused about it. Can you please help me?

Here is the code I wrote...

//customer.component.html
      <dxi-button name="edit" [onClick]= "OpenEditModal"></dxi-button>
      
//customer.component.ts
modalReference: NgbModalRef;
  constructor(private modalService: NgbModal){}

OpenEditModal(){
    this.modalReference = this.modalService.open(EditPopUpComponent);
}

I used this guide to use bootsrap modal: https://ng-bootstrap.github.io/#/components/modal/examples
*/












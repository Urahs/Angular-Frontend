import { HttpClient } from '@angular/common/http';
import { Component, enableProdMode, Injectable, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { Data } from 'src/app/models/Data';
import { PostService } from 'src/app/services/PostService';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditPopUpComponent } from '../edit-pop-up/edit-pop-up.component';
import { DeletePopUpComponent } from '../delete-pop-up/delete-pop-up.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
  
  openPreviewModal: boolean;
  dataSource: Employee[];
  nameOfCus: string;

  dataPost:Data=new Data();  
  constructor(
    private modalService: NgbModal,
    private postService: PostService)
  {
    this.savePopup = this.savePopup.bind(this);    
    this.OpenPreviewModal = this.OpenPreviewModal.bind(this);
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

  OpenEditModal() {
    console.log("asasas")
    const modalRef = this.modalService.open(EditPopUpComponent, {centered:true, size: 'lg'});
    /* modalRef.componentInstance.employeeId = inputData;  */
    /* modalRef.componentInstance.event.subscribe((rec: any) => {
        this.selectedCusRes = rec;
    }) */
}
OpenDeleteModal() {
  console.log("asadfdfas")
   const modalRef = this.modalService.open(DeletePopUpComponent, {centered:true, size: 'sm'});
  /*modalRef.componentInstance.event.subscribe((rec: any) => {
      if(rec) this.deleteCustomer(this.selectedCusRes); }) */
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












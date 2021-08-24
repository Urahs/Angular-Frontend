import { HttpClient } from '@angular/common/http';
import { Component, enableProdMode, Injectable, OnInit, ViewChild } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { Data } from 'src/app/models/Data';
// import { PostService } from 'src/app/services/PostService.service';
import { PostService } from 'src/app/services/PostService.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EditPopUpComponent } from '../edit-pop-up/edit-pop-up.component';
import { Router } from '@angular/router';
import { DeletePopUpComponent } from '../delete-pop-up/delete-pop-up.component';
import { PreviewPopUpComponent } from '../preview-pop-up/preview-pop-up.component';
import { CrudService } from 'src/app/services/crud.service';
import { AddPopUpComponent } from '../add-pop-up/add-pop-up.component';
import { DxDataGridComponent } from 'devextreme-angular';
import { AssignCustomerComponent } from '../assign-customer/assign-customer.component';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
  
  openPreviewModal: boolean;
  openEditModal: boolean;
  dataSource: Employee[];
  modalReference: NgbModalRef;
  submitButtonOptions: any;
  selectedItemKeys: any[] = [];

  constructor(
      private router: Router,
      private crudService: CrudService,
      private modalService: NgbModal
    )
    {  
      this.OpenPreviewModal = this.OpenPreviewModal.bind(this);
      this.postMessageEdit = this.postMessageEdit.bind(this);  
      this.postMessagePreview = this.postMessagePreview.bind(this);
    }

  
  ngOnInit(): void {
      this.getCustomers();
  }

  OpenPreviewModal(data: any) {
    const modalRef = this.modalService.open(PreviewPopUpComponent, {centered:true, size: 'lg'});
    modalRef.componentInstance.employee = data;
  }

    postMessagePreview(messageFromChild: any){
        this.openPreviewModal = messageFromChild;
    }

    postMessageEdit(messageFromChild: any){
      this.openEditModal = messageFromChild;
  }
  
  getCustomers(){
    this.crudService.get().subscribe(
        (data) => {
            this.dataSource = data;
        },
        (err) => {
            console.log(err);
        }
    );
  }

  assignCustomer(){
    const modalRef = this.modalService.open(AssignCustomerComponent, {centered:true, size: 'md'});
    modalRef.componentInstance.selectedCustomerID = this.selectedItemKeys;
  }

  onToolbarPreparing(e: any) {

    e.toolbarOptions.items.unshift(
      {
        location:"before",
        widget: 'dxButton',
        options: {
          icon : "group",
          text: "Yeni Müşteri Ekle",
          onClick: this.OpenAddModal.bind(this)
        }
      }, {
        location:"before",
        widget: 'dxButton',
        options: {
            icon: 'card',
            text: "Müşteriyi Ata",
            //disabled: ((this.selectedItemKeys.length > 0) ? false : true),
            onClick: this.assignCustomer.bind(this),
        }
      }
    );
  }

  selectionChanged(data: any) {
    this.selectedItemKeys = data.selectedRowKeys;
  }


  OpenAddModal = () => {
    console.log("zuhaha");
    const modalRef = this.modalService.open(AddPopUpComponent, {centered:true, size: 'lg'});

}

  OpenEditModal=(data: any)=>{
    const modalRef = this.modalReference = this.modalService.open(EditPopUpComponent, {size: "lg"});
    modalRef.componentInstance.employeeId = data[1];
  }

  
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

  myCommand(data: any){
    console.log(data);
    
  }

  deleteCustomer(inputData: any){
    this.crudService.deleteCustomer(inputData[1]).subscribe(data => {

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














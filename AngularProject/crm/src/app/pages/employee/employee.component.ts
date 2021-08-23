import { Component, enableProdMode, Injectable, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { PreviewPopUpComponent } from '../preview-pop-up/preview-pop-up.component';
import { CrudService } from 'src/app/services/crud.service';
import { UserProfile } from 'src/app/models/UserProfile';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  
  openPreviewModal: boolean;
  openEditModal: boolean;
  dataSource: Employee[];
  selectedCus!: Employee;
  deleteId: number;
  nameOfCus: string;
  modalReference: NgbModalRef;
  submitButtonOptions: any;
  selectedItemKeys: any[] = [];


  dataPost: Employee = {
    name : "",
    lastName: "",
    dateOfBirth: "",
    identificationNumber: "",
    customerId: 78
  };

  constructor(
    private router: Router,
    private crudService: CrudService,
    private modalService: NgbModal
    )
  {   
    this.OpenPreviewModal = this.OpenPreviewModal.bind(this);
    this.postMessagePreview = this.postMessagePreview.bind(this);
    this.submitButtonOptions = {
      icon: "email",
      text: "Send",
      onClick: () => {
        console.log(this.dataPost.name);
      }
    };
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

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

  

  deleteRecords() {
    this.selectedItemKeys.forEach((key) => {
        console.log(key);
        
    });
  }



  tempData: USerProfilex[] = [
    {"name": "Selim", "email": "sharumaku@gmail.com", "fullName": "Selim Sarıaltın"},
    {"name": "Cemil", "email": "sharumaku@gmail.com", "fullName": "Selim Sarıaltın"},
    {"name": "Kamil", "email": "sharumaku@gmail.com", "fullName": "Selim Sarıaltın"},
    {"name": "Emir", "email": "sharumaku@gmail.com", "fullName": "Selim Sarıaltın"},
    {"name": "Akın", "email": "sharumaku@gmail.com", "fullName": "Selim Sarıaltın"},
    {"name": "Batuş", "email": "sharumaku@gmail.com", "fullName": "Selim Sarıaltın"},
    {"name": "Selin", "email": "sharumaku@gmail.com", "fullName": "Selim Sarıaltın"},
  ]


}

export class USerProfilex {
  name: string;
  email: string;
  fullName: string;
}












function getSelectedRowsData(): Employee {
  throw new Error('Function not implemented.');
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












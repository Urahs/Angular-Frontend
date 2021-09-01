import { Component, enableProdMode, Injectable, OnInit, ViewChild } from '@angular/core';
import { CustomerModel } from 'src/app/models/customerModel';
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
  selector: 'assigned-customers',
  templateUrl: './assigned-customers.component.html',
  styleUrls: ['./assigned-customers.component.css']
})

export class AssignedCustomersComponent implements OnInit {
  
  dataSource: CustomerModel[];
  modalReference: NgbModalRef;
  selectedItemData: any[] = [];
  constructor(
      private router: Router,
      private crudService: CrudService,
      private modalService: NgbModal
    )
    {  
      this.OpenPreviewModal = this.OpenPreviewModal.bind(this);
    }

  
  ngOnInit(): void {
      this.getCustomers();
  }

  OpenPreviewModal(data: any) {
    const modalRef = this.modalService.open(PreviewPopUpComponent, {centered:true, size: 'md'});
    modalRef.componentInstance.customerId = data[0];
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



}














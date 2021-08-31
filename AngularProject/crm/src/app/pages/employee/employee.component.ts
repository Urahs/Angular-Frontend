import { Component, enableProdMode, Injectable, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { PreviewPopUpComponent } from '../preview-pop-up/preview-pop-up.component';
import { CrudService } from 'src/app/services/crud.service';
import { EmployeeModel } from 'src/app/models/employeeModel';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  
  selectedItemKeys: any[] = [];
  tempData: EmployeeModel[];

  constructor(
    private router: Router,
    private crudService: CrudService,
    private modalService: NgbModal
    )
  {   
    this.OpenPreviewModal = this.OpenPreviewModal.bind(this);

  }

  
  ngOnInit(): void {

      this.crudService.getEmployee().subscribe(
        (res: any) => {
          this.tempData = res;
        },
        (err: any) => {
          console.log(err);
        },
      );
  }

  OpenPreviewModal(data: any) {
    const modalRef = this.modalService.open(PreviewPopUpComponent, {centered:true, size: 'lg'});
    modalRef.componentInstance.employee = data;
  }

}

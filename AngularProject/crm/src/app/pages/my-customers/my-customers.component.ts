import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { CustomerModel } from 'src/app/models/customerModel';
import { DeletePopUpComponent } from '../delete-pop-up/delete-pop-up.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PreviewPopUpComponent } from '../preview-pop-up/preview-pop-up.component';
import { EditPopUpComponent } from '../edit-pop-up/edit-pop-up.component';

@Component({
  selector: 'app-my-customers',
  templateUrl: './my-customers.component.html',
  styleUrls: ['./my-customers.component.css']
})
export class MyCustomersComponent implements OnInit {

  dataSource: any[] = [0,1];
  myCustomers:CustomerModel[]=[];
  crudService: any;
  selectedItemData: any[] = [];
  flag: number;
  modalReference: NgbModalRef;
  gridTitles: string[] = ["İlgilendiğiniz Müşteriler", "Sonuçlandırılan Müşteriler"];
  OpenAddModal: any;
  assignCustomer: any;

  constructor
   (private service: CrudService,
    private modalService: NgbModal) 
    { this.OpenPreviewModal = this.OpenPreviewModal.bind(this);}
  
  ngOnInit(): void {
    this.getMyCustomers();
  }

  getMyCustomers(){
    this.service.getMyCustomers().subscribe(
      (res:any)=>{
        console.log(res);
        this.myCustomers=res;
      },
      err =>{
        console.log(err);
      }
    );
  }

  

  private btnExportInstance: any = null;
  private updateBtnStates() {
    if (this.btnExportInstance !== null) {
      this.btnExportInstance.option({
        disabled: !this.selectedItemData.length
      });
    }
  }
  selectionChanged(data: any) {
    this.selectedItemData=data.selectedRowsData;
    this.updateBtnStates();
  }
  
  OpenPreviewModal(data: any) {
    const modalRef = this.modalService.open(PreviewPopUpComponent, {centered:true, size: 'md'});
    modalRef.componentInstance.customerId = data[this.flag];
  }

  OpenEditModal=(data: any)=>{
    const modalRef = this.modalReference = this.modalService.open(EditPopUpComponent, {size: "lg"});
    modalRef.componentInstance.employeeId = data[1];
  }

  deleteCustomer(inputData: any){
    this.crudService.deleteCustomer(inputData[1]).subscribe(
      (data: any) => {
        console.log(data);
        
    },
    (err: any) => {
        console.log(err);
    }
    );   
  }

  OpenDeleteModal(data: any) {
      const modalRef = this.modalService.open(DeletePopUpComponent, {centered:true, size: 'sm'});
      modalRef.componentInstance.event.subscribe((rec: any) => {
          if(rec) this.deleteCustomer(data);
      })
  }
}

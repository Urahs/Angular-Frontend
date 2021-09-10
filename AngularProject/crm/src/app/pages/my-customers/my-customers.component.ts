import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { CustomerModel } from 'src/app/models/customerModel';
import { DeletePopUpComponent } from '../delete-pop-up/delete-pop-up.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PreviewPopUpComponent } from '../preview-pop-up/preview-pop-up.component';
import { EditPopUpComponent } from '../edit-pop-up/edit-pop-up.component';
import { CustomerAssignmentModel } from 'src/app/models/customerAssignmentModel';
import { MyCustomers } from 'src/app/models/myCustomers';
import { AccomplishComponent } from '../accomplish/accomplish.component';
import { ProcessHistory } from 'src/app/models/processHistory';

@Component({
  selector: 'app-my-customers',
  templateUrl: './my-customers.component.html',
  styleUrls: ['./my-customers.component.css']
})
export class MyCustomersComponent implements OnInit {

  historyArray: any[];
  employeeName: string;
  employees: any[];
  employeeId: string;
  trueDataArray: MyCustomers[] = [];
  dataSource: any[] = [0,1];
  myCustomers:CustomerModel[]=[];
  customerAssignmentModel : CustomerAssignmentModel;
  crudService: any;
  selectedItemData: any[] = [];
  flag: number;
  modalReference: NgbModalRef;
  gridTitles: string[] = ["İlgilendiğiniz Müşteriler", "Sonuçlandırılan İşlemler"];
  OpenAddModal: any;
  assignCustomer: any;

  constructor
   (private service: CrudService,
    private modalService: NgbModal) 
    { this.OpenPreviewModal = this.OpenPreviewModal.bind(this);}
  
  async ngOnInit(): Promise<void> {
    this.getMyCustomers();
    this.getMyHistory();
  }


  getMyCustomers(){

    return new Promise((resolve:any) => {
      
      this.service.getMyCustomers().subscribe(
        (res:any)=>{
          this.myCustomers = res;
          this.myCustomers.forEach(element => {
            const trueData: MyCustomers = new MyCustomers();
            trueData.name = element.name;
            trueData.lastName = element.lastName;
            trueData.dateOfBirth = element.dateOfBirth;
            trueData.identificationNumber = element.identificationNumber;
            trueData.customerId = element.customerId;
            this.service.getSpecificCustomerAssignment(element.customerId).subscribe(
              (res: any) => {
                trueData.transactionType = res.transactionType;
                this.trueDataArray.push(trueData);
              }
            );
          }
          );
          this.dataSource[0] = this.trueDataArray;
        },
        err =>{
          console.log(err);
        }
      );

      
    });

    
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
    modalRef.componentInstance.customerId = data[0];
  }

  OpenEditModal=(data: any)=>{
    const modalRef = this.modalReference = this.modalService.open(EditPopUpComponent, {size: "lg"});
    modalRef.componentInstance.employeeId = data[0];
  }

  OpenAccomplishModal(data: any) {
    const modalRef = this.modalService.open(AccomplishComponent, {centered:true, size: 'md'});
    modalRef.componentInstance.customerData = data;
  }

  getMyHistory(){

    this.service.getUserProfile().subscribe(
      (res: any) => {
        this.employeeName = res.userName;
        this.service.getEmployee().subscribe(
          (data: any) => {
            this.employees = data;
            this.findUserId(this.employeeName);
            this.service.getMyHistory(this.employeeId).subscribe(
              (input: any) => {
                this.historyArray = input;
                //console.log(input);
                this.dataSource[1] = this.historyArray;
              }
            )
          }
        )  
        
      }
    )
    
    /* this.service.getUserProfile().subscribe(
      (data: any) => {
        this.employeeName = data;

        this.service.getEmployee().subscribe(
          (res: any) => {
            this.employees = res;
            this.findUserId(this.employeeName);

            this.service.getMyHistory().subscribe(
              (res: any) => {
                res.forEach((element: any) => {
                  if (element.userId == this.employeeId) {
                    this.processHistoryModel.id = element.customerId;
                    this.processHistoryModel.transactionType = element.transactionType;
                    this.processHistoryModel.workCondition = element.workCondition;
                    this.proccessHistory.push(this.processHistoryModel);
                    console.log(this.processHistoryModel);
                    console.log("aa");
                    
                  }
                });
              }
            )

          }
        )


      }
    ) */
  }




  findUserId(name:string){
    this.employees.map(x=> {
      if(x.userName==name){
        this.employeeId=x.id!;
      };
    });
  }



}

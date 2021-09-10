import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerAssignmentModel } from 'src/app/models/customerAssignmentModel';
import { EmployeeModel } from 'src/app/models/employeeModel';
import { TransactionHistoryModel } from 'src/app/models/transactionHistoryModel';
import { CrudService } from 'src/app/services/crud.service';
import { EmployeeService } from 'src/app/services/employee.service';



@Component({
  selector: 'app-accomplish',
  templateUrl: './accomplish.component.html',
  styleUrls: ['./accomplish.component.css']
})
export class AccomplishComponent implements OnInit {

workConditions: string[] = [
  "Görüşüldü",
  "Ertelendi",
  "Sonuçlandı"
]
 
  note: string;
  @Input() customerData: any[];
  workConditionsName:string;
  userName: string;
  employeeId: string;
  employees: any[];
  pushObj: TransactionHistoryModel = new TransactionHistoryModel();
  constructor(
    public activeModal: NgbActiveModal ,
    private crudService: CrudService,
    private employeeService:EmployeeService)
  { 
    
  }

  ngOnInit(): void {
   
  }

  Assign(){
    this.pushObj.note = this.note;
    this.pushObj.workCondition = this.workConditionsName;
    this.pushObj.transactionType = this.customerData[5];
    this.pushObj.customerId = this.customerData[0];

    this.crudService.getUserProfile().subscribe(
      (data:any)  =>  {     
        this.userName = data.userName;
        
        this.crudService.getEmployee().subscribe(
          (res: any) => {
            this.employees = res;
            this.findUserId(this.userName);
            this.pushObj.userId = this.employeeId;

            this.crudService.postUserHistory(this.pushObj).subscribe();
          }
        );
      }
    );
  }



  findUserId(name:string){
    this.employees.map(x=> {
      if(x.userName==name){
        this.employeeId=x.id!;
      };
    });
  }


  


}

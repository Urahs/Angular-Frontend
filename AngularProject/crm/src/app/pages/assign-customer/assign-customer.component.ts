import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerAssignmentModel } from 'src/app/models/customerAssignmentModel';
import { EmployeeModel } from 'src/app/models/employeeModel';
import { UserCustomer } from 'src/app/models/UserCustomer';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-assign-customer',
  templateUrl: './assign-customer.component.html',
  styleUrls: ['./assign-customer.component.css']
})
export class AssignCustomerComponent implements OnInit {

  @Input() selectedCustomerID: any[];
  userCustomer: UserCustomer = new UserCustomer();
  customerRepresentative : EmployeeModel[];
  customerAssignin: CustomerAssignmentModel[];
  employeeName:string;

  constructor(
    public activeModal: NgbActiveModal ,
    private crudService: CrudService)
  { }

  myList : string[]=[] ;

  ngOnInit(): void {
    this.crudService.getEmployee().subscribe(
      (res: any) => {
        this.customerRepresentative = res;
        this.customerRepresentative.map(x=> this.myList.push(x.userName!));
        
      },
      (err: any) => {
        console.log(err);
      },
    );
  }

  Assign(){
    this.selectedCustomerID.forEach((key) => {
      this.userCustomer.CustomerId = key;
      
        this.crudService.postUserCustomer(this.userCustomer).subscribe(
          (response: any) => {
              console.log(response);
          },
          (err: any) => {
              console.log(err);
          }
        );
    });
    console.log("Assign method");
    


  }




}

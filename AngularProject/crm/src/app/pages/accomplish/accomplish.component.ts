import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerAssignmentModel } from 'src/app/models/customerAssignmentModel';
import { EmployeeModel } from 'src/app/models/employeeModel';
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
  @Input() selectedCustomerData: any[];
  workConditionsName:string;
  employeeId:string;
  constructor(
    public activeModal: NgbActiveModal ,
    private crudService: CrudService,
    private employeeService:EmployeeService)
  { 
    
  }

  ngOnInit(): void {
    

  }


  


}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerModel } from 'src/app/models/customerModel';
import { EmployeeService } from 'src/app/services/employee.service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'edit-pop-up',
  templateUrl: './edit-pop-up.component.html',
  styleUrls: ['./edit-pop-up.component.css']
})
export class EditPopUpComponent implements OnInit {

  customer: CustomerModel=new CustomerModel();

  @Input() employeeId: number;
  @Output() postEmployeeBack = new EventEmitter<CustomerModel>();
  
  constructor(
    public activeModal: NgbActiveModal,
    private crudService: CrudService)
    {
    }

  ngOnInit(): void {
    this.crudService.getCustomer(this.employeeId).subscribe((result) => {
      this.customer = result;
    });
  }

  Save(){

    this.crudService.UpdateCustomer(this.customer.customerId, this.customer).subscribe(() => {
    })
    
    this.activeModal.close('Close click')
  }
}
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-assign-customer',
  templateUrl: './assign-customer.component.html',
  styleUrls: ['./assign-customer.component.css']
})
export class AssignCustomerComponent implements OnInit {

  simpleProducts: string[] = [
    "HD Video Player",
    "SuperHD Video Player",
    "SuperPlasma 50",
    "SuperLED 50"
  ];
  constructor(
    public activeModal: NgbActiveModal,
    private crudService: CrudService) {
     }

  ngOnInit(): void {
  }

  Save(){
    /* this.crudService.UpdateCustomer(this.employee.customerId, this.employee).subscribe(() => {
    }) */
    this.activeModal.close('Close click')
  }
  
}

function getSimpleProducts(): string[] {
  throw new Error('Function not implemented.');
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from 'src/app/models/Data';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/models/Employee';
import { PostService } from 'src/app/services/PostService.service';

@Component({
  selector: 'edit-pop-up',
  templateUrl: './edit-pop-up.component.html',
  styleUrls: ['./edit-pop-up.component.css']
})
export class EditPopUpComponent implements OnInit {

  employee: Employee = {
    "name" : "",
    "lastName": "",
    "dateOfBirth": "",
    "identificationNumber": "",
    "customerId": 0
  };

  @Input() employeeId: number;
  @Output() postEmployeeBack = new EventEmitter<Employee>();
  
  constructor(
    public activeModal: NgbActiveModal,
    private postService: PostService)
    {
    }

  ngOnInit(): void {
    this.postService.getCustomer(this.employeeId).subscribe((result) => {
      this.employee = result;
    });
  }

  Save(){
    this.postService.UpdateCustomer(this.employee.customerId, this.employee).subscribe(() => {
      
    })
    this.activeModal.close('Close click')
  }
}
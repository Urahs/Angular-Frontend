import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(
    public activeModal: NgbActiveModal ,
    private crudService: CrudService)
  { }

  ngOnInit(): void {
  }

  Assign(){
    this.userCustomer.UserName = "batuşşşş";
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


  }



}

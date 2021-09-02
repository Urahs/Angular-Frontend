import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { CustomerModel } from 'src/app/models/customerModel';

@Component({
  selector: 'app-my-customers',
  templateUrl: './my-customers.component.html',
  styleUrls: ['./my-customers.component.css']
})
export class MyCustomersComponent implements OnInit {

  myCustomers:CustomerModel[]=[];

  constructor(private service: CrudService) { }
  
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
}

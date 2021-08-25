import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerModel } from 'src/app/models/customerModel';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-add-pop-up',
  templateUrl: './add-pop-up.component.html',
  styleUrls: ['./add-pop-up.component.css']
})


export class AddPopUpComponent implements OnInit {

  customer:CustomerModel= new CustomerModel();
  district:string;
  province:string;
  districtsList:string[]=[];
  provincesList:string[]=[];


  constructor(
    private crudService: CrudService,
    public activeModal: NgbActiveModal ) {
    this.savePopup=this.savePopup.bind(this);
  }
  
  ngOnInit(): void {
    this.getProvinces();
    
  }

  getProvinces(){
    this.crudService.getProvinces().subscribe(
      (response: any) => {
          this.provincesList=response;
          
      },
      (err: any) => {
          console.log(err);
      }
    );
  }
  
  getDistricts(){
    this.crudService.getDistricts(this.province).subscribe(
      (response: any) => {
          this.districtsList=response;
      },
      (err: any) => {
          console.log(err);
      }
  );
  }

  onValueChanged(e:any){
    if(this.province!=null){
      this.getDistricts();
    }
  }

  savePopup(){
    this.customer.province=this.province;
    this.customer.district=this.district;

    this.crudService.postData(this.customer).subscribe(
        (response: any) => {
        },
        (err: any) => {
            console.log(err);
        }
    );
  }

}
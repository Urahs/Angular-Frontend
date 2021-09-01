import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerModel } from 'src/app/models/customerModel';
import { CrudService } from 'src/app/services/crud.service';
import { ToastrService } from 'ngx-toastr';


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
    public activeModal: NgbActiveModal,
    private toastrService: ToastrService) {
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

  formValidation=(e:any)=>{
    let result = e.validationGroup.validate();
    if (result.isValid) {
        this.savePopup();
    }
    else
    this.toastrService.error("Lütfen bilgileriniz tekrar gözden geçiriniz");
  }

  savePopup(){
    this.customer.province=this.province;
    this.customer.district=this.district;
    this.changeDateFormat();

    this.crudService.postData(this.customer).subscribe(
        (response: any) => {
          
        },
        (err: any) => {
            console.log(err);
            this.toastrService.error("Lütfen bilgileriniz tekrar gözden geçiriniz");
        }
    );
  }

  changeDateFormat(){
    let str = this.customer.dateOfBirth;
    const strArr = str.split("/");    
    this.customer.dateOfBirth = (strArr[2]+"/"+strArr[1]+"/"+strArr[0]);
  }

}
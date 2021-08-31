import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CustomerModel } from 'src/app/models/customerModel';
import { AuthService } from 'src/app/services/auth.service';
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
  heroForm: FormGroup;
  hero: any;
  toastr: any;


  constructor(
    private crudService: CrudService,
    public service: AuthService,
    public activeModal: NgbActiveModal ) {
    this.savePopup=this.savePopup.bind(this);
  }
  
  ngOnInit(): void {/* 
    this.service.heroForm.reset(); */
    this.getProvinces();

    this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, [
        Validators.required,
      ]),
      lastName: new FormControl(this.hero.lastName, [
        Validators.required,
      ]), 
      dateOfBirth: new FormControl(this.hero.dateOfBirth, [
        Validators.required,
      ]),
      identificationNumber: new FormControl(this.hero.identificationNumber, [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ]),
      il: new FormControl(this.hero.il, [
        Validators.required,
      ]),
      ilce: new FormControl(this.hero.ilce, [
        Validators.required,
      ]),
      adres: new FormControl(this.hero.adres, [
        Validators.required,
      ]),
    }); 
  }
  
get name() { return this.heroForm.get('name'); }
get lastName() { return this.heroForm.get('lastName'); }
get dateOfBirth() { return this.heroForm.get('dateOfBirth'); }
get identificationNumber() { return this.heroForm.get('identificationNumber'); }
get il() { return this.heroForm.get('il'); }
get ilce() { return this.heroForm.get('ilce'); }
get adres() { return this.heroForm.get('adres'); }
 
/* 
onSubmit() {
  this.service.register().subscribe(
    (res: any) => {
      if (res.succeeded) {
        this.service.heroForm.reset();
        this.toastr.success('New user created!', 'Registration successful.');
      } else {
        res.errors.forEach((element:any) => {
          switch (element.code) {
            case 'DuplicateUserName':
              this.toastr.info('Username is already taken','Registration failed.');
              break;

            default:
            this.toastr.info(element.description,'Registration failed.');
              break;
          }
        }
        );
      }
    },
    (    err: any) => {
      console.log(err);
    }
  );
} */

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
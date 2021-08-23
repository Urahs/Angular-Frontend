import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { UserProfileModel } from '../models/userProfileModel';
import { UserDetailsModel } from '../models/userDetailsModel';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  apiUrl = environment.BaseURL;
  constructor(private http:HttpClient) { }

  // async getUserProfile() {
  getUserProfile() {
    return this.http.get(this.apiUrl + '/UserProfile');
  }

  postCustomer(data:any){
    return this.http.post(this.apiUrl+'/customers', data);
  }

  changeUserDetails(data: any){
    return this.http.put(this.apiUrl+'/UserProfile', data);
  }

  getEmployee(){
    return this.http.get(this.apiUrl+'/Employees');
  }
}

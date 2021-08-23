import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';
import { UserProfileModel } from '../models/userProfileModel';
import { UserDetailsModel } from '../models/userDetailsModel';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
    apiUrl = environment.BaseURL;
    constructor(private httpClient: HttpClient){}

    getUserProfile() {
      return this.httpClient.get(this.apiUrl + '/UserProfile');
    }
    
    public postData(data: any): Observable<any>{//Observable<any>
      //   return this.httpClient.post<any>('https://localhost:5001/api/customers', data, {headers: {}});
      return this.httpClient.post<any>(this.apiUrl+'/customers', data, {headers:{'Content-Type':  'application/json'}})   
    }
  
    get(): Observable<any>{
        return this.httpClient.get<any>(this.apiUrl+'/customers');
    }

    UpdateCustomer(cusId: number, data:Employee){
      return this.httpClient.put(this.apiUrl+'/customers/' + cusId, data);
    }

    getCustomer(cusId: number): Observable<Employee>{
      return this.httpClient.get<Employee>(this.apiUrl+'/customers/' + cusId);
    }

    public deleteCustomer(deleteId: any){
      const deleteEndpoint = this.apiUrl+'/customers/' + deleteId;
      return this.httpClient.delete(deleteEndpoint);
    }

    postUserCustomer (data: any): Observable<any> {
      return this.httpClient.post<any>(this.apiUrl+'/usercustomer', data, {headers:{'Content-Type':  'application/json'}})   
    }


  postCustomer(data:any){
    return this.httpClient.post(this.apiUrl+'/customers', data);
  }

  changeUserDetails(data: any){
    return this.httpClient.put(this.apiUrl+'/UserProfile', data);
  }

  getEmployee(){
    return this.httpClient.get(this.apiUrl+'/Employees');
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../models/Employee";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: "any"
  })
  
export class EmployeeService{
  constructor(private httpClient:HttpClient){}

  apiUrl = environment.BaseURL;
  postCustomerAssign (data: any): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl+'/customerassignment', data, {headers:{'Content-Type':  'application/json'}})
  }
  }

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../models/Employee";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: "any"
  })
  
export class PostService{
   
    apiUrl = environment.BaseURL;
    constructor(private httpClient: HttpClient){}
    
    public postData(data: any): Observable<any>{//Observable<any>
      //   return this.httpClient.post<any>('https://localhost:5001/api/customers', data, {headers: {}});
      return this.httpClient.post<any>(this.apiUrl+'/customers', data)   
      // return this.httpClient.post<any>(this.apiUrl+'/customers', data, {headers:{'Content-Type':  'application/json'}})  
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
  }

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../models/Employee";

@Injectable({
    providedIn: "any"
  })
  
export class PostService{
    constructor(private httpClient: HttpClient){}
    
    public postData(data: any): Observable<any>{//Observable<any>
      //   return this.httpClient.post<any>('https://localhost:5001/api/customers', data, {headers: {}});
      return this.httpClient.post<any>('https://localhost:5001/api/customers', data, {headers:{'Content-Type':  'application/json'}});
    }
  
    get(): Observable<any>{
        return this.httpClient.get<any>('https://localhost:5001/api/customers');
    }

    UpdateCustomer(cusId: number, data:Employee){
      return this.httpClient.put('https://localhost:5001/api/customers/' + cusId, data);
    }

    getCustomer(cusId: number): Observable<Employee>{
      return this.httpClient.get<Employee>("https://localhost:5001/api/customers/" + cusId);
    }

    public deleteCustomer(deleteId: any){
      const deleteEndpoint = "https://localhost:5001/api/customers/" + deleteId;
      return this.httpClient.delete(deleteEndpoint);
    }
  }
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

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

    public deleteCustomer(deleteId: any){
      const deleteEndpoint = "https://localhost:5001/api/customers/" + deleteId;
      return this.httpClient.delete(deleteEndpoint);
    }
  }
import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
    
  openModal: boolean;
  dataSource: Employee[];

//   dataPost:Data = new Data();
  dataPost:Data=new Data();  
  constructor(
    private postService: PostService)
  {
    this.savePopup = this.savePopup.bind(this);    
    this.OpenModal = this.OpenModal.bind(this);
    this.postMessage = this.postMessage.bind(this);  
  }

  
  ngOnInit(): void {
      this.getCustomers();
  }

  OpenModal() {
    this.openModal = true;
    console.log(this.openModal);
    // this.cdr.detectChanges();
    // this.cdr.markForCheck();
    }

    postMessage(messageFromChild: any){
        this.openModal = messageFromChild;
    }

  getCustomers(){
    this.postService.get().subscribe(
        (data) => {
            console.log(data);
            this.dataSource = data;
            
        },
        (err) => {
            console.log(err);
        }
    );

  }



  savePopup(){
    console.log('on save');

    

    this.postService.postData(this.dataPost).subscribe(//this.dataPost
        (response) => {
            console.log(response);
        },
        (err) => {
            console.log(err);
            
        }
    );
}


}


@Injectable({
    providedIn: 'any'
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


}

export class Employee {
  constructor(
    public CustomerId: number,
    public Name: string,
    public LastName: string,
    public IdentificationNumber: string,
    public DateOfBirth: string
    ){
  }
}

export class Data{
    CustomerId?: number;
    Name: string;
    LastName: string;
    DateOfBirth: string;
    IdentificationNumber: string;
}

export class State {
  ID: number;
  Name: string;
}







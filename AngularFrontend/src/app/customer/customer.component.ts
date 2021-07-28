import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
    

  dataSource: Employee[] ;

//   dataPost:Data = new Data();
  dataPost:Data=new Data();  
  constructor(
    private postService: PostService){
    this.savePopup = this.savePopup.bind(this);      
  }

  states: State[] = [{
    "ID": 1,
    "Name": "Alabama"
}, {
    "ID": 2,
    "Name": "Alaska"
}, {
    "ID": 3,
    "Name": "Arizona"
}, {
    "ID": 4,
    "Name": "Arkansas"
}, {
    "ID": 5,
    "Name": "California"
}, {
    "ID": 6,
    "Name": "Colorado"
}, {
    "ID": 7,
    "Name": "Connecticut"
}, {
    "ID": 8,
    "Name": "Delaware"
}, {
    "ID": 9,
    "Name": "District of Columbia"
}, {
    "ID": 10,
    "Name": "Florida"
}, {
    "ID": 11,
    "Name": "Georgia"
}, {
    "ID": 12,
    "Name": "Hawaii"
}, {
    "ID": 13,
    "Name": "Idaho"
}, {
    "ID": 14,
    "Name": "Illinois"
}, {
    "ID": 15,
    "Name": "Indiana"
}, {
    "ID": 16,
    "Name": "Iowa"
}, {
    "ID": 17,
    "Name": "Kansas"
}, {
    "ID": 18,
    "Name": "Kentucky"
}, {
    "ID": 19,
    "Name": "Louisiana"
}, {
    "ID": 20,
    "Name": "Maine"
}, {
    "ID": 21,
    "Name": "Maryland"
}, {
    "ID": 22,
    "Name": "Massachusetts"
}, {
    "ID": 23,
    "Name": "Michigan"
}, {
    "ID": 24,
    "Name": "Minnesota"
}, {
    "ID": 25,
    "Name": "Mississippi"
}, {
    "ID": 26,
    "Name": "Missouri"
}, {
    "ID": 27,
    "Name": "Montana"
}, {
    "ID": 28,
    "Name": "Nebraska"
}, {
    "ID": 29,
    "Name": "Nevada"
}, {
    "ID": 30,
    "Name": "New Hampshire"
}, {
    "ID": 31,
    "Name": "New Jersey"
}, {
    "ID": 32,
    "Name": "New Mexico"
}, {
    "ID": 33,
    "Name": "New York"
}, {
    "ID": 34,
    "Name": "North Carolina"
}, {
    "ID": 35,
    "Name": "Ohio"
}, {
    "ID": 36,
    "Name": "Oklahoma"
}, {
    "ID": 37,
    "Name": "Oregon"
}, {
    "ID": 38,
    "Name": "Pennsylvania"
}, {
    "ID": 39,
    "Name": "Rhode Island"
}, {
    "ID": 40,
    "Name": "South Carolina"
}, {
    "ID": 41,
    "Name": "South Dakota"
}, {
    "ID": 42,
    "Name": "Tennessee"
}, {
    "ID": 43,
    "Name": "Texas"
}, {
    "ID": 44,
    "Name": "Utah"
}, {
    "ID": 45,
    "Name": "Vermont"
}, {
    "ID": 46,
    "Name": "Virginia"
}, {
    "ID": 47,
    "Name": "Washington"
}, {
    "ID": 48,
    "Name": "West Virginia"
}, {
    "ID": 49,
    "Name": "Wisconsin"
}, {
    "ID": 50,
    "Name": "Wyoming"
}, {
    "ID": 51,
    "Name": "North Dakota"
}];

    

  ngOnInit(): void {
      this.getCustomers();
  }

  getCustomers(){
    // this.httpClient.get<any>('https://localhost:5001/api/customers').subscribe(
    //   response => {
    //     console.log(response);
    //     this.dataSource = response;
    //   }
    // );

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

    // this.dataPost = {
    //     CustomerId:undefined,
    //     Name: 'ad1',
    //     LastName: 'soyad1',
    //     DateOfBirth: 'tarih1',
    //     IdentificationNumber: 'numara1'
         
    // };


    

    // this.dataPost={
    //     Name: this.dataSource.find()?.Name,
    //     LastName: this.dataSource.find()?.LastName,
    //     DateOfBirth: this.dataSource.find()?.DateOfBirth,
    //     IdentificationNumber: this.dataSource.find()?.IdentificationNumber,
    // }

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
    // constructor(){
    //     this.CustomerId=undefined;
    //     this.Name="fatih";
    //     this.LastName="koc";
    //     this.DateOfBirth="dasd";
    //     this.IdentificationNumber="asd";
    // }
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








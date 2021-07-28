import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

    openModal: boolean;
    dataSource: Employee[];
    
    constructor(
        private httpClient: HttpClient,
        private cdr: ChangeDetectorRef) 
        {
        this.OpenModal = this.OpenModal.bind(this);
        this.postMessage = this.postMessage.bind(this);
    }   

    ngOnInit(){
        this.openModal = false;
        this.fetchData();
    }

    /* ngAfterViewInit(){
        this.cdr.detectChanges();
    } */


    fetchData(){
        this.httpClient.get<any>('https://localhost:5001/api/customers').subscribe(
            /* response => {
                console.log(response);
                this.fetchData = response;
            } */
            (data) => {
                console.log(data);
                this.dataSource = data;
            },
            (err) => {
                console.log(err);
            }
        )
    }


    savePopup(){
        console.log('on save');
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

    

    /* dataSource: Employee[] = [{
        "CustomerId": 45225,
        "Name": "sdfs",
        "LastName": "sdfs",
        "IdentificationNumber": "sdfs",
        "DateOfBirth": "sdfs"
    }] */

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

export class State {
  ID: number;
  Name: string;
}








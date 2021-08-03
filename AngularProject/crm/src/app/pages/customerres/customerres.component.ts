import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { PostService } from 'src/app/services/PostService';

@Component({
  selector: 'app-customerres',
  templateUrl: './customerres.component.html',
  styleUrls: ['./customerres.component.css']
})
export class CustomerresComponent implements OnInit {

    dataSource: Employee[];
    openPreviewModal: boolean;
    selectedCusRes!: Employee;
    openAddModal: boolean;
    deleteId: number;

    constructor(
        private postService: PostService
    ){
        this.openPreviewModal = false;
        this.openAddModal = false;
        this.OpenAddModal = this.OpenAddModal.bind(this);
        this.test = this.test.bind(this);
    }

    postMessagePreview(messageFromChild: any){
        this.openPreviewModal = messageFromChild;
    }

    postMessageAdd(messageFromChild: any){
        this.openAddModal = messageFromChild;
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

    OpenPreviewModal() {
        this.openPreviewModal = true;
    }

    CusResSelected(inputData: Employee){
        this.selectedCusRes = inputData;
    }
    OpenAddModal(){
        this.openAddModal = true;
        console.log("test");
    }

    ngOnInit(): void {
        this.getCustomers();
    }

    /* deleteCustomer(contactId: any){
        this.postService.deleteCustomer(contactId).subscribe(data => {
            console.log(data);
        })
        
    } */


    deleteCustomer(inputData: Employee){
        this.deleteId = inputData.CustomerId;
        this.postService.deleteCustomer(this.deleteId).subscribe(data => {
            console.log(data);
        })
        
    }


    test(inputData: Employee){
        this.selectedCusRes = inputData;
        console.log(this.selectedCusRes.Name);
    }

}

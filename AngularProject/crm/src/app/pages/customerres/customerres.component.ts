import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { PostService } from 'src/app/services/PostService';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeletePopUpComponent } from '../delete-pop-up/delete-pop-up.component';

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
        private postService: PostService,
        private modalService: NgbModal
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

    postMessageDelete(messageFromChild: any){
        console.log("aaaaaaaaaa");
        
        if(messageFromChild){
            console.log("True");
        }
        else
            console.log("False");
            
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

    open() {
        const modalRef = this.modalService.open(DeletePopUpComponent, {centered:true, size: 'sm',});
        modalRef.componentInstance.name = 'World';
    }


    test(inputData: Employee){
        this.selectedCusRes = inputData;
        console.log(this.selectedCusRes.Name);
    }

}

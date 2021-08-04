import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { PostService } from 'src/app/services/PostService';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeletePopUpComponent } from '../delete-pop-up/delete-pop-up.component';
import * as XLSX from 'xlsx'; 

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
        modalRef.componentInstance.event.subscribe((rec: any) => {
            if(rec) this.deleteCustomer(this.selectedCusRes);
        })
    }


    test(inputData: Employee){
        this.selectedCusRes = inputData;
        console.log(this.selectedCusRes.Name);
    }

    exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('cus-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, "test.xlsx");
			
    }
}



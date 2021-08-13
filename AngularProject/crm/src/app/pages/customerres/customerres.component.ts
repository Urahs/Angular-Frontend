import { Component,ViewChild, ElementRef, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { PostService } from 'src/app/services/PostService.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeletePopUpComponent } from '../delete-pop-up/delete-pop-up.component';
import * as XLSX from 'xlsx'; 
import { EditPopUpComponent } from '../edit-pop-up/edit-pop-up.component';

import { Data } from 'src/app/models/Data';

@Component({
  selector: 'app-customerres',
  templateUrl: './customerres.component.html',
  styleUrls: ['./customerres.component.css']
})
export class CustomerresComponent implements OnInit {
   
    @ViewChild('TABLE')

    dataSource: Employee[];
    openPreviewModal: boolean;
    selectedCusRes!: Employee;
    openAddModal: boolean;
    deleteId: number;
    isim:string="burak";

    constructor(
        private postService: PostService,
        private modalService: NgbModal
    ){
        this.openPreviewModal = false;
        this.openAddModal = false;

        this.OpenAddModal = this.OpenAddModal.bind(this);
    }

    ngOnInit(): void {
        this.getCustomers();
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

    

    

    OpenEditModal(inputData:number) {
        const modalRef = this.modalService.open(EditPopUpComponent, {centered:true, size: 'lg'});
        modalRef.componentInstance.employeeId = inputData;
        /* modalRef.componentInstance.event.subscribe((rec: any) => {
            this.selectedCusRes = rec;
        }) */
    }


    ExportExcel(): void 
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


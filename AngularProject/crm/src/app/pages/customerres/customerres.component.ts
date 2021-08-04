import { Component,ViewChild, ElementRef, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { PostService } from 'src/app/services/PostService';
import * as XLSX from 'xlsx';


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
    openEditModal: boolean;
    table: ElementRef;


    constructor(
        private postService: PostService
    ){
        this.openPreviewModal = false;
        this.openAddModal = false;
        this.OpenEditModal = this.OpenEditModal.bind(this);
        this.OpenAddModal = this.OpenAddModal.bind(this);
    }

    postMessagePreview(messageFromChild: any){
        this.openPreviewModal = messageFromChild;
    }

    
    postMessageAdd(messageFromChild: any){
        this.openAddModal = messageFromChild;
    }
    
    postMessageEdit(messageFromChild: any){
        this.openEditModal = messageFromChild;
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
    }
    OpenEditModal(){
        this.openEditModal = true;
    }

    ngOnInit(): void {
        this.getCustomers();
    }

    ExportExcel() {const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);//converts a DOM TABLE element to a worksheet
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
        /* save to file */
        XLSX.writeFile(wb, 'SheetJS.xlsx');
      }
      
}


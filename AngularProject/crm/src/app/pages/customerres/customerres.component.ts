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

    constructor(
        private postService: PostService
    ){
        this.openPreviewModal = false;
    }

    postMessagePreview(messageFromChild: any){
        this.openPreviewModal = messageFromChild;
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
        console.log("test");
        this.openPreviewModal = true;
    }

    CusResSelected(inputData: Employee){
        this.selectedCusRes = inputData;
    }


    ngOnInit(): void {
        this.getCustomers();
    }

}

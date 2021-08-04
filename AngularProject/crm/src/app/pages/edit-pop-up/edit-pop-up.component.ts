import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'edit-pop-up',
  templateUrl: './edit-pop-up.component.html',
  styleUrls: ['./edit-pop-up.component.css']
})
export class EditPopUpComponent implements OnInit {

  @Input() employee: Employee;
  @Output() postEmployeeBack = new EventEmitter<Employee>();
  
  constructor(public activeModal: NgbActiveModal){
    
  }

  ngOnInit(): void {
  }

  Save(){
    this.postEmployeeBack.emit(this.employee);
    this.activeModal.close('Close click')
  }

}

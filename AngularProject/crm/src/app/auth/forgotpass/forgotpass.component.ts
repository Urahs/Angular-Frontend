import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  elegantForm: FormGroup;


  constructor(public fb: FormBuilder) {
    this.elegantForm = fb.group({
      elegantFormEmailEx: ['', [Validators.required, Validators.email]],
      elegantFormPasswordEx: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

}

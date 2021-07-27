import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

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

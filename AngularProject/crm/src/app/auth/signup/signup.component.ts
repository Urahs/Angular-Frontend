
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  cardForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cardForm = fb.group({
      materialFormCardNameEx: ['', Validators.required],
      materialFormCardEmailEx: ['', [Validators.email, Validators.required]],
      materialFormCardConfirmEx: ['', Validators.required],
      materialFormCardPasswordEx: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

}

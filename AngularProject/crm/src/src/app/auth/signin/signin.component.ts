import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, NgForm  } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  formModel = {
    UserName: '',
    Password: ''
  }
  constructor(private service: AuthService, private router: Router, private toastr: ToastrService) {
    // this.onSubmit=this.onSubmit.bind(this);
   }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/home');
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/main/home');
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Gerçersiz kullanıcı adı ya da şifre.', 'Giriş başarısız.');
        else
          console.log(err);
      }
    );
  }

}

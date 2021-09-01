
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterViewInit {

  imagePath = "../../assets/oyak.png"
  
  constructor(public service: AuthService, private toastr: ToastrService, private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = '#ED1B2E';
        
}

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('Yeni kullanıcı oluşturuldu!', 'Kayıt işlemi başarılı.');
        } else {
          res.errors.forEach((element:any) => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.info('Bu kullanıcı adı başkası tarafından kullanılıyor.','Lütfen başka bir kullanıcı adı seçin.');
                break;

              default:
              this.toastr.info(element.description,'Kayıt işlemi başarısız.');
                break;
            }
          }
          );
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}

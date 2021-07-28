import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"auth", children:[
    {path: "signin", component: SigninComponent},
    {path: "signup", component: SignupComponent},
    {path: "forgotpass", component: ForgotpassComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

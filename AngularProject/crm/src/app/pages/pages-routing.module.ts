import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerresComponent } from './customerres/customerres.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LeftsideComponent } from './leftside/leftside.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { LoginGuard } from '../guards/login.guard';
import { SigninComponent } from '../auth/signin/signin.component';
import { SignupComponent } from '../auth/signup/signup.component';

const routes: Routes = [
  {path:"main",
  component: MainComponent, 
  children:[
    {path: "customer",component: CustomerComponent,canActivate:[LoginGuard]},
    {path: "customerres",component: CustomerresComponent,canActivate:[LoginGuard]},
    {path: "home", component: HomeComponent,canActivate:[LoginGuard]},
    {path: "", component: SigninComponent},
    {path: "chatbot",component: ChatbotComponent,canActivate:[LoginGuard]}
]},
{path:"",component: MainComponent, children:[
  {path: "", component: SigninComponent}
]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

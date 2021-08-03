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

const routes: Routes = [
  {path:"main",
  component: MainComponent, 
  children:[
    {path: "customer",component: CustomerComponent},
    {path: "customerres",component: CustomerresComponent},
    {path: "home", component: HomeComponent},
    {path: "", component: HomeComponent},
    {path: "chatbot",component: ChatbotComponent}
]},
{path:"",
  component: MainComponent, 
  children:[
    {path: "", component: HomeComponent},
]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

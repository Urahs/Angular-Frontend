import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerresComponent } from './customerres/customerres.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LeftsideComponent } from './leftside/leftside.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
    {path:"pages", children:[
    {path: "leftside", component: LeftsideComponent},
    {path: "navbar", component: NavbarComponent},
    {path: "footer", component: FooterComponent},
    {path: "customer",component: CustomerComponent},
    {path: "customerres",component: CustomerresComponent},
    {path: "home", component: HomeComponent},
    {path: "table", component: TableComponent},
    {path: "chatbot",component: ChatbotComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

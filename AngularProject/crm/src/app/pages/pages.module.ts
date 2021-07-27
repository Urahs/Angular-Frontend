import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { LeftsideComponent } from './leftside/leftside.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerresComponent } from './customerres/customerres.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { DxButtonModule, DxDataGridModule, DxDropDownButtonModule, DxPieChartModule } from 'devextreme-angular';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    
    NavbarComponent,
    TableComponent,
    LeftsideComponent,
    CustomerComponent,
    CustomerresComponent,
    FooterComponent,
    HomeComponent,
    ChatbotComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DxDropDownButtonModule,
    DxPieChartModule,
    AppRoutingModule,
    BrowserModule,
    DxButtonModule,
    DxDataGridModule,
  ]
})
export class PagesModule { }

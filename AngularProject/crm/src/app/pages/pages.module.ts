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
import { DxButtonModule, DxDataGridModule, DxDropDownButtonModule, DxPieChartModule, DxPopupModule, DxScrollViewModule, DxToolbarModule } from 'devextreme-angular';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { PopUpComponent } from './pop-up/pop-up.component';
import { EditPopUpComponent } from './edit-pop-up/edit-pop-up.component';
import { MainComponent } from './main/main.component';
import { AddPopUpComponent } from './add-pop-up/add-pop-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DeletePopUpComponent } from './delete-pop-up/delete-pop-up.component';


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
    PopUpComponent,
    EditPopUpComponent,
    MainComponent,
    AddPopUpComponent,
    DeletePopUpComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    PagesRoutingModule,
    DxDropDownButtonModule,
    DxPieChartModule,
    AppRoutingModule,
    BrowserModule,
    DxButtonModule,
    DxDataGridModule,
    DxPopupModule,
    DxToolbarModule,
    DxScrollViewModule,
    HttpClientModule 
  ]
})
export class PagesModule { }

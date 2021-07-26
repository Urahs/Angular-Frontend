import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxDataGridModule, DxPieChartModule,  DxPopupModule, DxScrollViewModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { LeftsideComponent } from './leftside/leftside.component';
import { CustomerComponent } from './customer/customer.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PopUpComponent } from './pop-up/pop-up.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    LeftsideComponent,
    CustomerComponent,
    FooterComponent,
    HomeComponent,
    PopUpComponent,
  ],
  imports: [
    DxScrollViewModule,
    DxPieChartModule,
    AppRoutingModule,
    BrowserModule,
    DxButtonModule,
    DxDataGridModule,
    RouterModule.forRoot(routes),
    DxPopupModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

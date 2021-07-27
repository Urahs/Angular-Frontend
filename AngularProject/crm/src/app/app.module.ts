import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxDataGridModule, DxPieChartModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { LeftsideComponent } from './leftside/leftside.component';
import { CustomerComponent } from './customer/customer.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CustomerresComponent } from './customerres/customerres.component';
import { DxDropDownButtonModule} from 'devextreme-angular';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    LeftsideComponent,
    CustomerComponent,
    CustomerresComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    DxDropDownButtonModule,
    DxPieChartModule,
    AppRoutingModule,
    BrowserModule,
    DxButtonModule,
    DxDataGridModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
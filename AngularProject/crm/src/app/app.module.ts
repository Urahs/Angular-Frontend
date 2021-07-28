import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxDataGridModule, DxPieChartModule,  DxPopupModule, DxScrollViewModule, DxToolbarModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { DxDropDownButtonModule} from 'devextreme-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';


const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    PagesModule,
    AuthModule,
    DxDropDownButtonModule,
    DxPieChartModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    DxButtonModule,
    DxDataGridModule,

    ReactiveFormsModule,
    
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

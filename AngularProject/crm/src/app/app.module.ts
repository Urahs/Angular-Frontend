import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxDataGridModule, DxPieChartModule, DxDropDownButtonModule} from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { DxoPopupModule, DxoToolbarModule } from 'devextreme-angular/ui/nested';
import { AuthServiceService } from './auth-service.service';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
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
    DxoPopupModule,
    DxoToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthServiceService
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
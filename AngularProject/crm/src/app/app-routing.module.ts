import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerComponent } from "./customer/customer.component";
import { HomeComponent } from "./home/home.component";
import { TableComponent } from "./table/table.component";

const routes: Routes = [
    {
        path: "customer",
        component: CustomerComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "table",
        component: TableComponent
    }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./auth/signin/signin.component";
import { AuthenticationGuard } from "./authentication.guard";
import { HomeComponent } from "./pages/home/home.component";


const routes: Routes = [
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
import { AuthService } from "./../auth.service";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "../login/login.component";
import { RegisterationComponent } from "../registeration/registeration.component";
import { IsloggindGuardGuard } from "src/app/shared/guards/isloggind-guard.guard";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [IsloggindGuardGuard],
  },

  {
    path: "register",
    component: RegisterationComponent,
    canActivate: [IsloggindGuardGuard],
  },
  {
    path: "**",
    redirectTo: "login",
    canActivate: [IsloggindGuardGuard],
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

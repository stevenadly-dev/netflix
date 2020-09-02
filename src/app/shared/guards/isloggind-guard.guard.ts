import { AuthService } from "./../../auth/auth.service";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class IsloggindGuardGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(
      "this.authService.checkLocalStorage()",
      !this.authService.checkLocalStorage()
    );
    return !this.authService.checkLocalStorage();
  }
}

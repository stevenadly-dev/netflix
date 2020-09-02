import { AuthService } from "./../../../auth/auth.service";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import "lodash";
declare var _: any;
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean;
  isLoginned: boolean;
  constructor(private authService: AuthService) {
    this.isCollapsed = false;
  }

  logOut() {
    this.authService.logout();
  }

  checkIfIsLogged() {
    this.authService.loggedSubject.subscribe((res) => {
      this.isLoginned = res;
    });
  }

  ngOnInit(): void {
    this.checkIfIsLogged();

    this.isLoginned = this.authService.checkLocalStorage();
    console.log(" this.isLoginned", this.isLoginned);
  }
}

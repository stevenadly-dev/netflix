import { AuthService } from "./../../../auth/auth.service";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-footer",
  templateUrl: "footer.component.html",
  styleUrls: ["footer.component.scss"],
})
export class FooterComponent implements OnInit {
  isLoginned: boolean;

  constructor(private authService: AuthService) {}

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

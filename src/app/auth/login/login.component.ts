import { errorMsg } from "./../../shared/animations/animations";
import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  animations: [errorMsg],
})
export class LoginComponent implements OnInit {
  finalErrors: string;
  constructor(private AuthService: AuthService, private route: Router) {}

  ngOnInit(): void {}

  onSubmitLogin(myForm) {
    this.AuthService.login(myForm)
      .then((res) => {
        this.route.navigateByUrl("/shows");
        this.AuthService.setUID(res.user.uid);
      })
      .catch(() => {
        this.finalErrors = "invalid email or password at login";
        setTimeout(() => {
          this.finalErrors = null;
        }, 2000);
      });
  }
}

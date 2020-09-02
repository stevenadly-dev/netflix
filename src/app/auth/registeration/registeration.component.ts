import { errorMsg } from "./../../shared/animations/animations";
import { AuthService } from "./../auth.service";
import { Observable } from "rxjs";
import { Component, OnInit, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-registeration",
  templateUrl: "./registeration.component.html",
  styleUrls: ["./registeration.component.scss"],
  animations: [errorMsg],
})
export class RegisterationComponent implements OnInit {
  registerationForm: FormGroup;
  upassword: HTMLInputElement;
  users: any[];
  things: Observable<any[]>;
  finalErrors: string;
  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService,
    private route: Router
  ) {
    this.registerationForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength]],
    });
  }

  onSubmitReactiveForm() {
    this.AuthService.registeration(this.registerationForm)
      .then((res) => {
        this.route.navigateByUrl("/auth/login");
      })
      .catch(() => {
        this.finalErrors = "invalid email or password at registeration";
        setTimeout(() => {
          this.finalErrors = null;
        }, 2000);
      });
  }

  ngOnInit(): void {}
}

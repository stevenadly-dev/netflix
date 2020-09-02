import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home-container",
  templateUrl: "./home-container.component.html",
  styleUrls: ["./home-container.component.scss"],
})
export class HomeContainerComponent implements OnInit {
  constructor(private route: Router) {}

  getStarted() {
    if (localStorage.getItem("netflixUID")) {
      this.route.navigateByUrl("shows");
    } else {
      this.route.navigateByUrl("auth/login");
    }
  }
  ngOnInit(): void {}
}

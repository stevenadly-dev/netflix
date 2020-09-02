import { routingAnimation } from "./shared/animations/animations";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [routingAnimation],
})
export class AppComponent {}

import { FadeIN } from "./../../../shared/animations/animations";
import { Component, OnInit, Input } from "@angular/core";
import { environment } from "src/environments/environment.prod";

@Component({
  selector: "app-single-movie-card",
  templateUrl: "./single-movie-card.component.html",
  styleUrls: ["./single-movie-card.component.scss"],
  animations: [FadeIN],
})
export class SingleMovieCardComponent implements OnInit {
  @Input() myMovie: any;
  @Input() test: any;

  movie;
  imgPrefix: string;
  constructor() {}

  ngOnInit(): void {
    console.log("this test", this.test);
    this.movie = this.myMovie;
    this.imgPrefix = environment.imgPrefix;
  }
}

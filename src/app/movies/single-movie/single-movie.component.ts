import {
  FadeIN,
  FadeIN2,
  popupParent,
} from "./../../shared/animations/animations";
import { environment } from "./../../../environments/environment.prod";
import { MoviesService } from "./../movies.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { trigger, state, style } from "@angular/animations";

@Component({
  selector: "app-single-movie",
  templateUrl: "./single-movie.component.html",
  styleUrls: ["./single-movie.component.scss"],
  animations: [FadeIN, FadeIN2, popupParent],
})
export class SingleMovieComponent implements OnInit {
  currentMoviesID: number = 0;
  currentMovie;
  type;
  imgPrefix: string;
  currentAnimationState = "login";
  isLogin = true;
  popedup = false;
  isLoading: boolean = false;
  constructor(
    private activatedRouter: ActivatedRoute,
    private MoviesService: MoviesService
  ) {}

  toggleAnimation() {
    return this.isLogin ? "login" : "logout";
  }

  ngOnInit(): void {
    this.currentMoviesID = this.activatedRouter.snapshot.params["id"];
    this.type = this.activatedRouter.snapshot.params["type"];

    this.imgPrefix = environment.imgPrefix;

    this.getCurrentMovie();
  }

  getCurrentMovie() {
    this.isLoading = true;
    this.MoviesService.getSingleMovie(
      this.type,
      this.currentMoviesID
    ).subscribe(
      (res) => {
        this.currentMovie = res;
      },
      (err) => {},
      () => {
        this.isLoading = false;
      }
    );
  }

  closePopup() {
    this.popedup = false;
  }

  openPopup() {
    this.popedup = true;
  }
}

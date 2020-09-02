import { FadeIN } from "./../../shared/animations/animations";
import { style, transition, animate } from "@angular/animations";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "./../movies.service";
import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment.prod";
import { trigger, state } from "@angular/animations";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
  animations: [
    FadeIN,
    // trigger("movieAnimation", [
    //   state(
    //     "state1",
    //     style({
    //       transform: "skewX(45deg)",
    //     })
    //   ),
    //   state(
    //     "state2",
    //     style({
    //       transform: "skewX(0deg)",
    //     })
    //   ),
    //   transition("state1 =>state2", animate(300)),
    //   transition("state2 =>state1", animate(1000)),
    // ]),

    // ========================================================================================

    // trigger("shrinkAnimation", [
    //   state("state1", style({ transform: "scale(1)", background: "red" })),

    //   transition("stateShrunk <=> *", [
    //     animate(3000, style({ "border-radius": "50%" })),
    //     animate(3000),
    //   ]),

    //   state(
    //     "stateShrunk",
    //     style({ transform: "scale(1)", background: "blue" })
    //   ),
    // ]),

    // trigger("singleMovieAnimation", [
    //   state(
    //     "in",
    //     style({
    //       opacity: 1,
    //       transform: "translateX(800px)",
    //       color: "red",
    //       background: "blue",
    //     })
    //   ),
    //   transition("void => *", [
    //     style({
    //       opacity: 0,
    //       transform: "translateX(-500px)",
    //       color: "white",
    //       background: "green",
    //     }),
    //     animate(2000),
    //   ]),
    // ]),
  ],
})
export class MoviesComponent implements OnInit {
  trendingMovies: any[] = [];
  pageNum = 1;
  totalPagesNumber: number;
  imgPrefix: string;
  heroes: any[] = ["ali", "ahmed"];
  heroinput: string;
  currentState = "state1";

  isLoading: boolean = false;

  constructor(
    private MoviesService: MoviesService,
    private ActivatedRoute: ActivatedRoute
  ) {}

  getMovies(pageNum: number) {
    this.isLoading = true;
    this.MoviesService.getTrendingMovies(pageNum || 1).subscribe(
      (res: any) => {
        this.trendingMovies = res.results;
        this.pageNum = res.page;
        this.totalPagesNumber = res.total_pages;
      },
      (err) => {},
      () => {
        this.isLoading = false;
      }
    );
  }

  addHero() {
    this.heroes.push(this.heroinput);
  }

  ngOnInit(): void {
    this.getMovies(this.pageNum);
    // this.getSongs();
  }
}

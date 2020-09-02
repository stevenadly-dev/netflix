import { SingleMovieComponent } from "./single-movie/single-movie.component";
import { MoviesComponent } from "./movies/movies.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MoviesRoutingModule } from "./movies-routing.module";
import { FormsModule } from "@angular/forms";
import { PaginatorComponent } from "./movies/paginator/paginator.component";
import { SingleMovieCardComponent } from "./movies/single-movie-card/single-movie-card.component";
import { ProgressSpinnerModule } from "primeng/progressspinner";

let SHARED = [MoviesComponent, SingleMovieComponent];
@NgModule({
  declarations: [SHARED, PaginatorComponent, SingleMovieCardComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    ProgressSpinnerModule,
  ],
  exports: [...SHARED],
})
export class MoviesModule {}

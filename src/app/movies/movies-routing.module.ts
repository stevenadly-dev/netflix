import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { MoviesComponent } from "./movies/movies.component";
import { SingleMovieComponent } from "./single-movie/single-movie.component";

const routes: Routes = [
  {
    path: "",
    component: MoviesComponent,
    pathMatch: "full",
  },
  { path: ":type/:id", component: SingleMovieComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}

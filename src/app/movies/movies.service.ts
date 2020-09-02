import { environment } from "./../../environments/environment.prod";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  getTrendingMovies(pageNum: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${environment.ApiKey}&page=+${pageNum}`
    );
  }

  getSingleMovie(type: string, movieId: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/${type}/${movieId}?api_key=${environment.ApiKey}&language=en-US`
    );
  }

  // getSongs() {
  //   return this.http.get(
  //     "https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?locale=en-US&id=40008598",
  //     {
  //       headers: {
  //         "x-rapidapi-host": "shazam.p.rapidapi.com",
  //         "x-rapidapi-key":
  //           "c45be15e0cmsh7c960b1a44da6b1p11a1f0jsnc57ab3919503",
  //       },
  //     }
  //   );
  // }
}

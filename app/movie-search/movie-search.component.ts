import { Component, OnInit } from '@angular/core';
import {MovieServiceClient} from '../services/movie.service.client';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  movieTitle;
  hello = 'hello from Movie Search Component';
  details = {};
  status = false;
  movies = [];

  constructor(private movieService: MovieServiceClient) { }

  searchForMovie(movieTitle) {
    this.movieService
      .findMoviesByTitle(movieTitle)
      .then(res => this.movies = res.Search);
  }

  findMovieDetails(movie) {
    this.movieService
      .findMovieDetails(movie.imdbID)
      .then(details => this.details = details);
  }

  findMovieStatus(movieTitle) {
    this.movieService
      .findMovieStatus(movieTitle);

    function convertToBoolean(Response): boolean | undefined {
      try {
        return JSON.parse(Response);
      } catch (e) {
        return undefined;
      }
    }

    console.log(convertToBoolean('true')); // true
    console.log(convertToBoolean('false')); // false
    console.log(convertToBoolean('invalid')); // undefined
  }

  ngOnInit() {

  }

}

export class MovieServiceClient{

  FIND_MOVIE_DETAILS = 'http://www.omdbapi.com/?i=IMDBID&apikey=24f15e8b';

  findMovieDetails(imdbID){
    const url = this.FIND_MOVIE_DETAILS.replace('IMDBID', imdbID);
    return fetch(url)
      .then(response => response.json());
  }

  findMoviesByTitle(title){
    return fetch('http://www.omdbapi.com/?s=' + title + '&apikey=24f15e8b')
      .then(response => response.json());
  }

  findMovieStatus(title){
    return fetch('http://www.omdbapi.com/?s=' + title + '&apikey=24f15e8b')
      .then(response => response.json());


  }
}

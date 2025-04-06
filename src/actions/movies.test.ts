import {
  GET_MOVIE_FAILURE,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  getMovieFailure,
  getMovieRequest,
  getMoviesFailure,
  getMoviesRequest,
  getMoviesSuccess,
  getMovieSuccess,
} from "./movies";

describe("Movies Actions", () => {
  test("GET_MOVIES_REQUEST", () => {
    expect(getMoviesRequest()).toEqual({ type: GET_MOVIES_REQUEST });
  });
  test("GET_MOVIES_SUCCESS", () => {
    const movies = [
      {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994,
        genre: ["Drama"],
        rating: 9.3,
        director: "Frank Darabont",
        actors: ["Tim Robbins", "Morgan Freeman"],
        plot: "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
        poster: "https://fakeimg.pl/220x310/ff0000",
        trailer: "https://example.com/shawshank_redemption_trailer.mp4",
        runtime: 142,
        awards: "Nominated for 7 Oscars",
        country: "USA",
        language: "English",
        boxOffice: "$28.3 million",
        production: "Columbia Pictures",
        website: "http://www.warnerbros.com/movies/shawshank-redemption",
      },
    ];

    expect(getMoviesSuccess(movies)).toEqual({
      type: GET_MOVIES_SUCCESS,
      payload: movies,
    });
  });

  test("GET_MOVIES_FAILURE", () => {
    const msg = "No movies found!";
    expect(getMoviesFailure(msg)).toEqual({
      type: GET_MOVIES_FAILURE,
      payload: "No movies found!",
    });
  });

  test("GET_MOVIE_REQUEST", () => {
    expect(getMovieRequest("1")).toEqual({
      type: GET_MOVIE_REQUEST,
      payload: "1",
    });
  });

  test("GET_MOVIE_SUCCESS", () => {
    const movie = {
      id: 100,
      title: "The Shawshank Redemption",
      year: 1994,
      genre: ["Drama"],
      rating: 9.3,
      director: "Frank Darabont",
      actors: ["Tim Robbins", "Morgan Freeman"],
      plot: "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
      poster: "https://fakeimg.pl/220x310/ff0000",
      trailer: "https://example.com/shawshank_redemption_trailer.mp4",
      runtime: 142,
      awards: "Nominated for 7 Oscars",
      country: "USA",
      language: "English",
      boxOffice: "$28.3 million",
      production: "Columbia Pictures",
      website: "http://www.warnerbros.com/movies/shawshank-redemption",
    };
    expect(getMovieSuccess(movie)).toEqual({
      type: GET_MOVIE_SUCCESS,
      payload: movie,
    });
  });

  test("GET_MOVIE_FAILURE", () => {
    const msg = "Something wrong";
    expect(getMovieFailure(msg)).toEqual({
      type: GET_MOVIE_FAILURE,
      payload: msg,
    });
  });
});

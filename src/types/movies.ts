export interface Movies {
  id: number;
  title: string;
  year: number;
  genre: Array<string>;
  rating: number;
  director: string;
  actors: Array<string>;
  plot: string;
  poster: string;
  trailer: string;
  runtime: number;
  awards: string;
  country: string;
  language: string;
  boxOffice: string;
  production: string;
  website: string;
}

export interface MoviesAction {
  type: string;
  payload?: any;
}

export interface MovieState {
  movies: Movies[];
  loading: boolean;
  error: string;
}

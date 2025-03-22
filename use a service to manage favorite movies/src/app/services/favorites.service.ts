import { computed, inject, Injectable, signal } from '@angular/core';
import { MoviesService } from './movies.service';
import { Movie } from '../model/movie.model';
import { map } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  services = inject(MoviesService);
  private favMovies = signal<Movie[]>([]);
  constructor() {}

  addFavMovies(movie: Movie) {
    var index = this.favMovies().findIndex((ind) => ind.id == movie.id);
    //add to fav movie
    if (index == -1) {
      this.favMovies.set([...this.favMovies(), movie]);
    }
    //remove from fav movie if already exist
    else {
      this.favMovies().splice(index, 1);
      this.favMovies.set(this.favMovies());
    }
    console.log(this.favMovies());
  }
  isFavMovie(movie: Movie) {
    console.log(
      'is fav movie-',
      movie.title,
      this.favMovies().find((m) => m.id == movie.id) != null
    );
    return this.favMovies().find((m) => m.id == movie.id) != null;
  }
}

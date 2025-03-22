import { Component, input } from '@angular/core';
import { Movie } from '../model/movie.model';

@Component({
  selector: 'app-movie-item',
  template: `
    <div
      [className]="initialClass"
      (mouseover)="MouseOver()"
      (mouseout)="Mouseout()"
    >
      <div>
        <h4>{{ movie().title }}</h4>
        <small class="subtitle">
          <span>Release date: {{ movie().release_date }}</span>
          <span>Budget: $ {{ movie().budget }} million</span>
          <span>Duration: {{ movie().duration }} min</span>
        </small>
      </div>
      <button>Details</button>
    </div>
  `,
  standalone: true,
  styleUrls: ['movie-item.component.scss'],
})
export class MovieItemComponent {
  movie = input.required<Movie>();
  initialClass = 'movie-item';
  MouseOver() {
    this.initialClass = 'movie-item-mouseOver';
  }
  Mouseout() {
    this.initialClass = 'movie-item';
  }
}

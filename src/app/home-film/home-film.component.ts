import {Component, Input} from '@angular/core';
import {Film} from "../../Model/film";
import {FilmService} from "../../Service/film.service";
import {DetailsComponent} from "../details/details.component";
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@Component({
  selector: 'app-home-film',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './home-film.component.html',
  styleUrl: './home-film.component.css'
})
export class HomeFilmComponent {
  @Input() film!: Film;
  constructor(private filmService :FilmService) { }
  getUrl(name : any){
    return this.filmService.getimagefromapi(name);
  }

  isFavorite: boolean = false;


  toggleFavorite() {
    this.isFavorite = !this.isFavorite;

    if (this.isFavorite) {
      this.filmService.addFavoriteMovie(this.film.id).subscribe(
        () => {
          console.log('Movie added to favorites:', this.film.id);
          // Handle success if needed
        },
        (error) => {
          console.error('Error adding movie to favorites:', error);
          // Handle error if needed
        }
      );
    } else {
      this.filmService.removeFavoriteMovie(this.film.id).subscribe(
        () => {
          console.log('Movie removed from favorites:', this.film.id);
          // Handle success if needed
        },
        (error) => {
          console.error('Error removing movie from favorites:', error);
          // Handle error if needed
        }
      );
    }
  }

  // Optionally, you can implement a method to check if the movie is a favorite and set isFavorite accordingly
  // checkFavoriteStatus() {
  //   this.filmService.getFavoriteMovieIds().subscribe(
  //     (favoriteMovieIds: number[]) => {
  //       this.isFavorite = favoriteMovieIds.includes(this.film.id);
  //     },
  //     (error) => {
  //       console.error('Error retrieving favorite movie IDs:', error);
  //       // Handle error if needed
  //     }
  //   );
  // }



}

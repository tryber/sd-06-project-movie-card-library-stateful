import React from 'react';
import Proptypes, { object } from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  filterBookMarked(UnfilteredMovies, bookmarkedOnly) {
    if (bookmarkedOnly) {
      return UnfilteredMovies.filter((movie) => movie.bookmarked === true);
    }
    return UnfilteredMovies;
  }

  filterGender(UnfilteredMovies, gender) {
    if (gender !== '') {
      return UnfilteredMovies.filter((movie) => movie.genre === gender);
    }
    return UnfilteredMovies;
  }

  render() {
    let { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    movies = this.filterBookMarked(movies, bookmarkedOnly);
    movies = this.filterGender(movies, selectedGenre);
    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.filter((movie) => Object.values(movie).join('\n')
          .toLowerCase().includes(searchText.toLowerCase()))
          .map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: Proptypes.arrayOf(object).isRequired,
  searchText: Proptypes.string.isRequired,
  bookmarkedOnly: Proptypes.bool.isRequired,
  selectedGenre: Proptypes.string.isRequired,
};
export default MovieList;

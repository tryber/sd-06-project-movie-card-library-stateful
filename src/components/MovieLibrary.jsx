import React from 'react';
// import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }
  render() {
    return (
      <div>
        <MovieList movies={movies} />
        <AddMovie />
        <SearchBar
          searchText
          onSearchTextChange
          bookmarkedOnly
          onBookmarkedChange
          selectedGenre
          onSelectedGenreChange
        />
      </div>
    );
  }
}

// MovieLibrary.propTypes = { movies: PropTypes.array };

export default MovieLibrary;

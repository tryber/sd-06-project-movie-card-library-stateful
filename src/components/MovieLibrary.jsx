import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super()
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies:
    }
    onSearchTextChange = onSearchTextChange.bind(this);
    onBookmarkedChange = onBookmarkedChange.bind(this);
  }
  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const { onSearchTextChange, onBookmarkedChange } = this.state;
    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={onSearchTextChange}
          onBookmarkedChange={onBookmarkedChange}
        />
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieLibrary;

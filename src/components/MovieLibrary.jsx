import React from 'react';
import propTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <MovieList movies={movies} />
        <AddMovie />
        <SearchBar />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: propTypes.arrayOf(propTypes.object).isRequired };

export default MovieLibrary;

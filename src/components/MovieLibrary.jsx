import React from 'react';
import propTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';


class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
        />
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: propTypes.arrayOf(propTypes.object).isRequired };

export default MovieLibrary;

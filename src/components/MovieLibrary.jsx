import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      storyline: '',
      movies: props.movies,
    };
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.searchText}
          bookmarkedOnly={this.bookmarkedOnly}
          selectedGenre={this.selectedGenre}
        />
        <AddMovie />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieLibrary;

import React from 'react';
import PropTypes, { objectOf } from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  render() {
    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar
          searchText={this.searchText}
          bookmarkedOnly={this.bookmarkedOnly}
          selectedGenre={this.selectedGenre}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.PropTypes = { movies: PropTypes.arrayOf(objectOf).isRequired }

export default MovieLibrary;

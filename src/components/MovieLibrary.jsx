import React from 'react';
import PropTypes, { objectOf } from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    // const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies,
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

MovieLibrary.PropTypes = { movies: PropTypes.arrayOf(objectOf).isRequired };

export default MovieLibrary;

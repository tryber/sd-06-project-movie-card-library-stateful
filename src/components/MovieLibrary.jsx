import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();

    // this.onSearchTextChange = this.onSearchTextChange.bind(this);
    // this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    // this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);

  }

  // onSearchTextChange() {
  // }
  // onBookmarkedChange() {
  // }
  // onSelectedGenreChange() {

  // }

  onClick() {
    return 1;
  }

  render() {
    const { movies } = this.props;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        {/* <SearchBar
          searchText={'text'}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={'true'}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={'Genre'}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />, */}
        <MovieList movies={movies} />
        <AddMovie onClick={this.onClick} movies={movies} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.shape.isRequired };

export default MovieLibrary;

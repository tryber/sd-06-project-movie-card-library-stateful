import React, { Component } from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList'
import AddMovie from './AddMovie'

class MovieLibrary extends Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        <SearchBar />
        <MovieList movies={movies}/>
        <AddMovie />
      </div>
    );
  }

}

export default MovieLibrary;

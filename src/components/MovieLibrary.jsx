import React from 'react';
import data from '../data';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MovieList movies={data} />
        <AddMovie />
      </div>
    )
  }
}

export default MovieLibrary;

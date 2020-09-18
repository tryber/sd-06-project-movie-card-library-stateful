import React from 'react';
import data from '../data';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.handleAddMovieClick = this.handleAddMovieClick.bind(this);
  }

  handleAddMovieClick() {
    this.setState(this.initialState);
  }

  render() {
    return (
      <div>
        <SearchBar />
        <MovieList movies={data} />
        <AddMovie onClick={this.handleAddMovieClick} />
      </div>
    );
  }
}

export default MovieLibrary;

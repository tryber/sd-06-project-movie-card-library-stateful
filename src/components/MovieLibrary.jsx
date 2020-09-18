import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    return true;
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar />
        <MovieList movies={movies} />
        <AddMovie onClick={this.onClick}/>
      </div>
    );
  }
}

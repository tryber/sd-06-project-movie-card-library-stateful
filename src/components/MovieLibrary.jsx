import React, { Component } from 'react';
import movies from '../data';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };
  }
  render() {
    return (<span>Ok</span>);
  }
}

export default MovieLibrary;

import React from 'react';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: '',
    };
  }
  render() {
    return "OI";
  }
}

export default MovieLibrary;

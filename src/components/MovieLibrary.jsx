import React from 'react';
import SearchBar from './SearchBar';

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
    return (
      <div>
        <SearchBar searchText={this.state.searchText} />
      </div>
    )
  }
}

export default MovieLibrary;

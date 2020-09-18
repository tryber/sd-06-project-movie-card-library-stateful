import React from 'react';
import movies from '../data';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          selectedGenre={selectedGenre}
          bookmarkedOnly={bookmarkedOnly}
        />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;

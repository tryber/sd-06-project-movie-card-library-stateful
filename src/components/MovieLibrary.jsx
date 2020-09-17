import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <AddMovie />
        <SearchBar
          searchText
          onSearchTextChange
          bookmarkedOnly
          onBookmarkedChange
          selectedGenre
          onSelectedGenreChange
        />
      </div>
    );
  }
}

export default MovieLibrary;

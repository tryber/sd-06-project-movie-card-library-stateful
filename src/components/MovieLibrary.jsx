import React from 'react';
// import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <SearchBar
          searchText=""
          onSearchTextChange="#"
          bookmarkedOnly=""
          onBookmarkedChange=""
          selectedGenre=""
          onSelectedGenreChange=""
        />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;

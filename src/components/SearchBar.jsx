import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, 
      bookmarkedOnly, onBookmarkedChange,
       selectedGenre, onSelectedGenreChange } = this.props.search;
    return (
      <div />
    );
  }
}

export default SearchBar;

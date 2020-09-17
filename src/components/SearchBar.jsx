import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return <form data-testid="search-bar-form">
      <label htmlFor="" data-testid="text-input-label">Inclui o texto:</label>
      <input type="text" name="" value={searchText} onChange={onSearchTextChange} data-testid="text-input" />
    </form>;
  }
}

export default SearchBar;
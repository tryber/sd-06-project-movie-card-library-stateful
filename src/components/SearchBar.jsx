import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return <form data-testid="search-bar-form">
      <label htmlFor="containsTextFilter" data-testid="text-input-label">Inclui o texto:</label>
      <input type="text" name="containsTextFilter" value={searchText} onChange={onSearchTextChange} data-testid="text-input" />
      <label htmlFor="showFavorites" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
      <input type="checkbox" name="showFavorites" checked={bookmarkedOnly} onChange={onBookmarkedChange} data-testid="checkbox-input" />
    </form>;
  }
}

export default SearchBar;
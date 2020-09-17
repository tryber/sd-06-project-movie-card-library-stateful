// implement SearchBar component here
import PropTypes from 'prop-types';
import React, { Component, useCallback } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
    selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="" data-testid="text-input-label">
          Inclui o texto:
          <input type="text" value={searchText} onChange={onSearchTextChange}
            data-testid="text-input"
          />
        </label>
        <label htmlFor="" data-testid="select-input-label">
          Filtrar por gênero
        <select data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}>
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
        </label>
      </form>
    );
  }
}

SearchBar.defaultProps = {
  searchText: 'searchText',
  onSearchTextChange: useCallback,
  bookmarkedOnly: true,
  onBookmarkedChange: useCallback,
  selectedGenre: 'selectedGenre',
  onSelectedGenreChange: useCallback,
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;

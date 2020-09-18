// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, onBookmarkedChange, selectedGenre,
      onSelectedGenreChange,
      // bookmarkedOnly,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input-text" data-testid="text-input-label">Inclui o texto:</label>
        <input
          type="text" data-testid="text-input" value={searchText} onChange={onSearchTextChange}
        />
        <label htmlFor="check" data-testid="checkbox-input-label">Mostrar somente favoritos </label>
        <input
          type="checkbox" data-testid="checkbox-input"
          checked="bookmarkedOnly" onChange={onBookmarkedChange}
        />
        <label htmlFor="select" data-testid="select-input-label">Filtrar por gênero</label>
        <select data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange} >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.string.isRequired,
  // bookmarkedOnly: PropTypes.string.isRequired,
};

export default SearchBar;

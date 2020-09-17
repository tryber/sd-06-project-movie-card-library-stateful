import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form" htmlFor="my-form">
        <label htmlFor="my-form" data-testid="text-input-label">Inclui o texto:
          <input type="text" data-testid="text-input"
            value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="my-form" data-testid="checkbox-input-label">Mostrar somente favoritos
          <input type="checkbox" data-testid="checkbox-input"
            checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label>
        <label htmlFor="my-form" data-testid="select-input-label">Filtrar por gênero
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

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;

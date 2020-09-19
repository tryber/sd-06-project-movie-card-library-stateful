// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';


class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">Inclui o texto:</label>
        <input type="text" value={searchText} onChange={onSearchTextChange} data-testid="text-input" />
        <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
        <input type="checkbox" onChange={onBookmarkedChange} checked={bookmarkedOnly} data-testid="checkbox-input" />
        <label data-testid="select-input-label">Filtrar por gênero</label>
        <select value={selectedGenre} onChange={onSelectedGenreChange} data-testid="select-input">
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option selected value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  renderSelect() {
    const {
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <select
        value={selectedGenre}
        onChange={onSelectedGenreChange}
        data-testid="select-input"
      >
        <option data-testid="select-option" value="">Todos</option>
        <option data-testid="select-option" value="action">Ação</option>
        <option data-testid="select-option" value="comedy">Comédia</option>
        <option data-testid="select-option" value="thriller">Suspense</option>
      </select>
    );
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">Inclui o texto:</label>
        <input
          value={searchText}
          onChange={onSearchTextChange}
          data-testid="text-input"
          type="text"
        />
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
        </label>
        <input
          data-testid="checkbox-input"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          type="checkbox"
        />
        <label htmlFor="select-input" data-testid="select-input-label">Filtrar por gênero</label>
        {this.renderSelect()}
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

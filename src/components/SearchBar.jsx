import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="selectId" data-testid="select-input-label">
        Filtrar por gênero
        <select
          id="selectId" data-testid="select-input"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="serchTextId" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="serchTextId" data-testid="text-input" type="text" name="name"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
        <label htmlFor="checkboxId" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="checkboxId" data-testid="checkbox-input" type="checkbox" name="name"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
        {this.renderSelect()}
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

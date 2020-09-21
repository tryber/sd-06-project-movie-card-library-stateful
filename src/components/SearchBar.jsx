import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  renderSelect() {
    const {
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <label htmlFor="select-input" data-testid="select-input-label">
        Filtrar por gênero
        <select
          id="select-input"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
          data-testid="select-input"
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  renderCheck() {
    const {
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;
    return (
      <label htmlFor="check-input" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          id="check-input"
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="text-input" type="text" value={searchText}
            onChange={onSearchTextChange} data-testid="text-input"
          />
        </label>
        {this.renderCheck()}
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

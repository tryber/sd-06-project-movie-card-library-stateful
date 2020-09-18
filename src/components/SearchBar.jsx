import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  renderTextInput() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto:
        <input
          data-testid="text-input"
          htmlFor="text-input"
          onChange={onSearchTextChange}
          type="text"
          value={searchText}
        />
      </label>
    );
  }

  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <label data-testid="select-input-label" htmlFor="select">
        Filtrar por gênero
        <select
          data-testid="select-input"
          id="select"
          onChange={onSelectedGenreChange}
          value={selectedGenre}
        >
          <option data-testid="select-option" id="select" value="">Todos</option>
          <option data-testid="select-option" id="select" value="action">Ação</option>
          <option data-testid="select-option" id="select" value="comedy">Comédia</option>
          <option data-testid="select-option" id="select" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        {this.renderTextInput}
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            htmlFor="checkbox-input"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
        {this.renderSelect()}
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};


import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <p>Search Bar</p>
        <form action="" data-testid="search-bar-form">

          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto
          </label>

          <input
            id="text-input"
            type="text"
            name=""
            data-testid="text-input"
            value={searchText}
            onChange={onSearchTextChange}
          />

          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
            Mostrar somente favoritos
          </label>

          <input
            id="checkbox-input"
            type="checkbox"
            name=""
            data-testid="checkbox-input"
            checked value={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />

          <label htmlFor="gender" data-testid="select-input-label">Filtrar por gênero</label>
          <select
            name="gender"
            id="gender"
            form=""
            data-testid="select-input"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.string.isRequired,
};

export default SearchBar;

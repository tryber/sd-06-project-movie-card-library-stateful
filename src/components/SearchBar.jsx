import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre,onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">Inclui o texto:</label>
          <input
            type="text" data-testid="text-input" alue={searchText} onChange={onSearchTextChange}
          />
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input
            type="checkbox" data-testid="checkbox-input" hecked={bookmarkedOnly} onChange={onBookmarkedChange}
          />
          <label htmlFor="select-input" data-testid="select-input-label">Filtrar por gênero</label>
          <select
            data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}
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

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: undefined,
  bookmarkedOnly: false,
  onBookmarkedChange: undefined,
  selectedGenre: '',
  onSelectedGenreChange: undefined,
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;

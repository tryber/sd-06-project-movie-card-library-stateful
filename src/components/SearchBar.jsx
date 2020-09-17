import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label for="id-text" data-testid="text-input-label">Inclui o texto:
          <input type="text" value={searchText} id="id-text"
            onChange={onSearchTextChange}
            data-testid="text-input"
          />
        </label>
        <label for="id-check" data-testid="checkbox-input-label">Mostrar somente favoritos
          <input type="checkbox" id="id-check"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange} data-testid="checkbox-input"
          />
        </label>
        <label for="select-options" data-testid="select-input-label">Filtrar por gênero
          <select value={selectedGenre}
            onChange={onSelectedGenreChange}
            data-testid="select-input" id="select-options"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
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

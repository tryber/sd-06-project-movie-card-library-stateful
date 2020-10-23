import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, searchText } = this.props;
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    const { onSelectedGenreChange, selectedGenre } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input
            data-testid="text-input"
            onChange={onSearchTextChange}
            value={searchText}
            type="text"
          />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input
            checked={bookmarkedOnly}
            data-testid="checkbox-input"
            onChange={onBookmarkedChange}
            type="checkbox"
          />
        </label>

        <label data-testid="select-input-label" htmlFor="selectGenre">
          Filtrar por gênero
          <select
            data-testid="select-input"
            name="selectGenre"
            onChange={onSelectedGenreChange}
            value={selectedGenre}
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
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default SearchBar;

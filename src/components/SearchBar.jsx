import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  handleSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <select
        data-testid="select-input"
        name="selectedGenre"
        value={selectedGenre}
        onChange={onSelectedGenreChange}
      >
        <option data-testid="select-option" value="">Todos</option>
        <option data-testid="select-option" value="action">Ação</option>
        <option data-testid="select-option" value="comedy">Comédia</option>
        <option data-testid="select-option" value="thriller">Suspense</option>
      </select>
    );
  }
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto
      <input
        data-testid="text-input"
        name="searchText"
        onChange={onSearchTextChange}
        value={searchText}
      />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
        Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            name="bookmarkedOnly"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero {this.handleSelect()}
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default SearchBar;

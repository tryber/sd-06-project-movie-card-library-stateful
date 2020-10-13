import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  selectGenerate() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="gen-select">
          Filtrar por gênero
        <select
          id="gen-select"
          data-testid="select-input"
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

  checkboxGenerate() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="fav-check">
        Mostrar somente favoritos
        <input
          type="checkbox"
          id="fav-check"
          data-testid="checkbox-input"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
      </label>
    );
  }

  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto
          <input
            type="text"
            id="text-input"
            data-testid="text-input"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
        {this.checkboxGenerate()}
        {this.selectGenerate()}
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

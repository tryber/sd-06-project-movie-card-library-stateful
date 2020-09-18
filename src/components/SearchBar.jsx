import React from 'react';
import propTypes from 'prop-types';

class SearchBar extends React.Component {
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
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">
            <p>Inclui o texto</p>
            <input id="text-input" data-testid="text-input" value={searchText} onChange={onSearchTextChange} />
          </label>
          <div>
            <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
              <input id="checkbox-input" data-testid="checkbox-input" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
              <span>Mostrar somente favoritos</span>
            </label>
          </div>
          <label htmlFor="select-input-label" data-testid="select-input-label">
            Filtrar por gênero
            <div>
              <select data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}>
                <option data-testid="select-option" value="">Todos</option>
                <option data-testid="select-option" value="action">Ação</option>
                <option data-testid="select-option" value="comedy">Comédia</option>
                <option data-testid="select-option" value="thriller">Suspense</option>
              </select>
            </div>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: propTypes.string.isRequired,
  onSearchTextChange: propTypes.func.isRequired,
  bookmarkedOnly: propTypes.bool.isRequired,
  onBookmarkedChange: propTypes.func.isRequired,
  selectedGenre: propTypes.string.isRequired,
  onSelectedGenreChange: propTypes.func.isRequired,
};

export default SearchBar;

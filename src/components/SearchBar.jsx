// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly } = this.props;
    const { onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="searchtext" data-testid="text-input-label">
            Inclui o texto:
            <input id="searchtext" value={searchText} onChange={onSearchTextChange} data-testid="text-input" />
          </label>
          <label htmlFor="checkbox" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input id="checkbox" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} data-testid="checkbox-input" />
          </label>
          <label htmlFor="select" data-testid="select-input-label">
            Filtrar por gênero
            <select id="select" value={selectedGenre} onChange={onSelectedGenreChange} data-testid="select-input">
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
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

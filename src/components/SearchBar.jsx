import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      onBookmarkedChange,
      bookmarkedOnly,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text" data-testid="text-input-label">
            Inclui o texto:
            <input type="text" id="text" data-testid="text-input" value={searchText} onChange={onSearchTextChange} />
          </label>
          <label htmlFor="check" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input id="check" type="checkbox" data-testid="checkbox-input" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          </label>
          <label htmlFor="genre" data-testid="select-input-label">
            Filtrar por gênero
            <select data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange} id="genre">
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;

import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      onSearchTextChange,
      searchText,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <div>
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto:
            <input data-testid="text-input" onChange={onSearchTextChange} value={searchText} />
          </label>
        </div>

        <div>
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input type="checkbox" data-testid="checkbox-input" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          </label>
        </div>

        <div>
          <label htmlFor="select-option" data-testid="select-input-label">
            Filtrar por gênero
            <select data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}>
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
        </div>
      </form>
    );
  }
}

export default SearchBar;

SearchBar.defaultProps = {
  onSearchTextChange: PropTypes.string,
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.string,
};

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.string,
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.string,
};

import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  filterMovieGenres() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="selected-genre" data-testid="select-input-label">Filtrar por gênero
      <select data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}>
        <option value="">Todos</option>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    </label>
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
        <label data-testid="text-input-label" htmlFor="text">Inclui o texto
          <input
            data-testid="text-input"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="favorites">Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            name="favoritos"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            />
        </label>
        <label data-testid="select-input-label" htmlFor="select-input-label">
          {this.filterMovieGenres()}
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBar;
